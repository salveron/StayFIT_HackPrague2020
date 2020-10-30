from flask import Flask
from app.config import Config


application = Flask(__name__)
application.config.from_object(Config)


@application.route("/")
def hello():
    return "Hello World"
