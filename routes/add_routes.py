from flask import request, jsonify

from utils import application, db
from models import User, Video, Article, Course


@application.route("/add_user", methods=['POST'])
def add_user():
    data = request.get_json()
    if data and data['id'] and data['name'] and data['phone']:
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


@application.route("/add_video", methods=["POST"])
def add_video():
    data = request.get_json()
    if data and data["id"] and data["url"] and data["title"]:
        existing_video = Video.query.filter_by(id=data['id']).first()
        if existing_video is not None:
            response = {
                'message': 'video already exists'
            }
            return jsonify(response), 403

        try:
            new_video = Video(id=data["id"], url=data["url"], title=data["title"], description=data["description"])
        except KeyError:
            new_video = Video(id=data["id"], url=data["url"], title=data["title"])

        db.session.add(new_video)
        db.session.commit()
        response = {
            'message': 'new video registered'
        }
        return jsonify(response), 202

    response = {
        'status': 'error',
        'message': 'bad request body'
    }
    return jsonify(response), 400


@application.route("/add_article", methods=["POST"])
def add_article():
    data = request.get_json()
    if data and data["id"] and data["header"]:
        existing_article = Article.query.filter_by(id=data['id']).first()
        if existing_article is not None:
            response = {
                'message': 'article already exists'
            }
            return jsonify(response), 403

        try:
            new_article = Article(id=data["id"], header=data["header"], text=data["text"])
        except KeyError:
            new_article = Article(id=data["id"], header=data["header"])

        db.session.add(new_article)
        db.session.commit()
        response = {
            'message': 'new article registered'
        }
        return jsonify(response), 202

    response = {
        'status': 'error',
        'message': 'bad request body'
    }
    return jsonify(response), 400


@application.route("/add_course", methods=["POST"])
def add_course():
    data = request.get_json()
    if data and data["id"] and data["id_videos"]:
        existing_course = Course.query.filter_by(id=data['id']).first()
        if existing_course is not None:
            response = {
                'message': 'course already exists'
            }
            return jsonify(response), 403

        try:
            new_course = Course(id=data["id"], article=Article.query.filter_by(id=data["id_article"]))
        except KeyError:
            new_course = Course(id=data["id"])

        new_course.videos = [Video.query.filter_by(id=vid) for vid in data["id_videos"]]

        db.session.add(new_course)
        db.session.commit()
        response = {
            'message': 'new course registered'
        }
        return jsonify(response), 202

    response = {
        'status': 'error',
        'message': 'bad request body'
    }
    return jsonify(response), 400

