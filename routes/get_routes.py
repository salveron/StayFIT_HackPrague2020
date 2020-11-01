from flask import jsonify

from utils import application, cursor


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
    response = {
        'data': result,
        'status_code': 202
    }
    return jsonify(response)


@application.route("/videos/<video_id>", methods=['GET'])
def get_video(video_id):
    cursor.execute(f"SELECT * FROM video WHERE id = {video_id}")
    video = cursor.fetchone()
    if video is None:
        response = {
            'message': 'video does not exist'
        }
        return jsonify(response), 404
    result = {
        'id': video[0],
        'url': video[1],
        'title': video[2],
        'description': video[3]
    }
    response = {
        'data': result,
        'status_code': 202
    }
    return jsonify(response)


@application.route("/articles/<article_id>", methods=['GET'])
def get_article(article_id):
    cursor.execute(f"SELECT * FROM article WHERE id = {article_id}")
    article = cursor.fetchone()
    if article is None:
        response = {
            'message': 'article does not exist'
        }
        return jsonify(response), 404
    result = {
        'id': article[0],
        'header': article[1],
        'content': article[2]
    }
    response = {
        'data': result,
        'status_code': 202
    }
    return jsonify(response)


@application.route("/courses/<course_id>", methods=["GET"])
def get_course(course_id):
    cursor.execute(f"SELECT * FROM course WHERE id = {course_id}")
    course = cursor.fetchone()
    if course is None:
        response = {
            'message': 'course does not exist'
        }
        return jsonify(response), 404
    result = {
        'id': course[0],
        'id_article': course[1]
    }
    response = {
        'data': result,
        'status_code': 202
    }
    return jsonify(response)
