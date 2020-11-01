from flask import request, redirect, render_template, session, url_for, jsonify

from backend.utils import application, api, cursor


@application.route("/session", methods=['GET'])
def session_view():
    return jsonify({"country_code": session["country_code"],
                    "phone_number": session["phone_number"]})


@application.route("/phone_verification", methods=["GET", "POST"])
def phone_verification():
    if request.method == "POST":
        data = request.get_json()
        if data:
            country_code = data["country_code"]
            phone_number = data["phone_number"]
        elif request.form.get("country_code") and request.form.get("phone_number"):
            country_code = request.form.get("country_code")
            phone_number = request.form.get("phone_number")
        else:
            return jsonify({"message": "bad request body"})

        session["country_code"] = country_code
        session["phone_number"] = phone_number

        api.phones.verification_start(phone_number, country_code, via="sms")
        return redirect(url_for("verify"))

    return render_template("phone_verification.html")


@application.route("/verify", methods=["GET", "POST"])
def verify():
    if request.method == "POST":
        data = request.get_json()
        if data:
            token = data["token"]
        elif request.form.get("token"):
            token = request.form.get("token")
        else:
            return jsonify({"message": "bad request body"})

        phone_number = session.get("phone_number")
        country_code = session.get("country_code")

        verification = api.phones.verification_check(phone_number, country_code, token)

        if verification.ok():
            return jsonify(verification.ok())

    return render_template("verify.html")


@application.route("/course_list", methods=["GET"])
def course_list():
    cursor.execute("SELECT * FROM course")
    courses = cursor.fetchall()

    dicts = []
    for course in courses:
        dicts.append({
            "id": course[0],
            "article_id": course[1],
            "header": course[2],
            "topic": course[3],
            "duration": course[4],
            "description": course[5]
        })

    return jsonify({
        "courses": dicts
    })
