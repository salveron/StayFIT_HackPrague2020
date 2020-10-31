from flask import jsonify

from utils import application
from models import *

user_schema = UserSchema()
video_schema = VideoSchema()
article_schema = ArticleSchema()


@application.route("/users/<user_id>", methods=['GET'])
def get_user(user_id):
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


@application.route("/videos/<video_id>", methods=['GET'])
def get_video(video_id):
    video = Video.query.filter_by(id=video_id).first()
    if video is None:
        response = {
            'message': 'video does not exist'
        }
        return jsonify(response), 404
    result = video_schema.dump(video)
    response = {
        'data': result,
        'status_code': 202
    }
    return jsonify(response)


@application.route("/articles/<article_id>", methods=['GET'])
def get_articles(article_id):
    article = Article.query.filter_by(id=article_id).first()
    if article is None:
        response = {
            'message': 'article does not exist'
        }
        return jsonify(response), 404
    result = article_schema.dump(article)
    response = {
        'data': result,
        'status_code': 202
    }
    return jsonify(response)

