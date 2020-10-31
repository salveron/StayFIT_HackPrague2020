from flask import Flask
from authy.api import AuthyApiClient
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_session import Session

from config import Config


application = Flask(__name__)
application.config.from_object(Config)
api = AuthyApiClient(application.config['AUTHY_API_KEY'])
db = SQLAlchemy(application)
application.config["SESSION_SQLALCHEMY"] = db
ma = Marshmallow(application)
cors = CORS(application)
sess = Session()
sess.init_app(application)
