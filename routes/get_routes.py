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

    cursor.execute(f"")
    return jsonify(result)
