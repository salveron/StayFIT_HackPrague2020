from flask import request, redirect, render_template, session, url_for, jsonify

from utils import application, api, cursor


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


@application.route("/users/<user_id>", methods=['GET'])
def get_user(user_id):
    cursor.execute(f"SELECT * FROM user WHERE id = {user_id}")
    user = cursor.fetchone()
    if user is None:
        response = {
            'message': 'user does not exist'
        }
        return jsonify(response), 404
    result = {
        'id': user[0],
        'name': user[1],
        'phone': user[2]
    }
    return jsonify(result)


@application.route("/videos/<video_id>", methods=['GET'])
def get_video(video_id):
    cursor.execute(f"SELECT * FROM video WHERE id = {video_id}")
    video = cursor.fetchone()
    if video is None:
        response = {
            'message': 'video does not exist'
        }
        return jsonify(response)
    result = {
        'id': video[0],
        'url': video[1],
        'title': video[2],
        'description': video[3]
    }
    return jsonify(result)


@application.route("/articles/<article_id>", methods=['GET'])
def get_article(article_id):
    cursor.execute(f"SELECT * FROM article WHERE id = {article_id}")
    article = cursor.fetchone()
    if article is None:
        response = {
            'message': 'article does not exist'
        }
        return jsonify(response)
    result = {
        'id': article[0],
        'header': article[1],
        'content': article[2]
    }
    return jsonify(result)


@application.route("/courses/<course_id>", methods=["GET"])
def get_course(course_id):
    cursor.execute(f"SELECT * FROM course LEFT JOIN article ON course.article_id = article.id WHERE course.id = {course_id}")
    course = cursor.fetchone()
    print(course)
    if course is None:
        response = {
            'message': 'course does not exist'
        }
        return jsonify(response), 404
    result = {
        "id": course[0],
        "article_id": course[1],
        "header": course[2],
        "topic": course[3],
        "duration": course[4],
        "description": course[5],
        "article_header": course[7],
        "article_content": course[8]
    }

    cursor.execute(f"SELECT video.* FROM course JOIN video ON course.id = video.course_id WHERE course.id = {course_id}")
    fetched = cursor.fetchall()
    videos = []
    for video in fetched:
        videos.append({
            "id": video[0],
            "url": video[1],
            "title": video[2],
            "description": video[3]
        })
    result["videos"] = videos
    return jsonify(result)


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
