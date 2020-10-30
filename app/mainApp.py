from app.config import Config
from authy.api import AuthyApiClient
from flask import (Flask, Response, request, redirect,
                   render_template, session, url_for, jsonify)

application = Flask(__name__)
application.config.from_object(Config)
api = AuthyApiClient(application.config['AUTHY_API_KEY'])


@application.route("/")
def hello():
    return "Hello World"


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

            verification = api.phones.verification_check(phone_number,
                                                         country_code,
                                                         token)

            if verification.ok():
                return jsonify(verification.ok())

    return render_template("verify.html")


if __name__ == '__main__':
    application.run(debug=True)
