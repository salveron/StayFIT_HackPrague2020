from flask import request, redirect, render_template, session, url_for, jsonify

from utils import application, db, api
from models import User, UserSchema

user_schema = UserSchema()


@application.route("/user/details/<user_id>", methods=['GET'])
def get_user_details(user_id):
    user = User.query.filter_by(id=user_id).first()
    if user is None:
        response = {
            'message': 'user does not exist'
        }
        return jsonify(response), 404
    result = user_schema.dump(user)
    response = {
        'data': result,
        'status_code': 202
    }
    return jsonify(response)


@application.route("/user/details", methods=['POST'])
def user_details():
    data = request.get_json()
    if data['id'] and data['name'] and data['phone']:
        existing_user = User.query.filter_by(id=data['id']).first()
        if existing_user is not None:
            response = {
                'message': 'user already exists'
            }
            return jsonify(response), 403
        new_user = User(id=data['id'], name=data['name'], phone=data['phone'])
        db.session.add(new_user)
        db.session.commit()
        response = {
            'message': 'new user registered'
        }
        return jsonify(response), 202
    response = {
        'status': 'error',
        'message': 'bad request body'
    }
    return jsonify(response), 400


@application.route("/phone_verification", methods=["GET", "POST"])
def phone_verification():
    if request.method == "POST":
        country_code = request.form.get("country_code")
        phone_number = request.form.get("phone_number")
        method = request.form.get("method")

        session['country_code'] = country_code
        session['phone_number'] = phone_number

        api.phones.verification_start(phone_number, country_code, via=method)

        return redirect(url_for("verify"))

    return render_template("phone_verification.html")


@application.route("/verify", methods=["GET", "POST"])
def verify():
    if request.method == "POST":
        token = request.form.get("token")

        phone_number = session.get("phone_number")
        country_code = session.get("country_code")

        verification = api.phones.verification_check(phone_number, country_code, token)

        if verification.ok():
            return jsonify(verification.ok())

    return render_template("verify.html")
