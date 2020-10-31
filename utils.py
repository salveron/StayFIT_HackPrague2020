from flask import Flask
from authy.api import AuthyApiClient
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS

from config import Config, ConfigDB


application = Flask(__name__)
application.config.from_object(Config)
application.config.from_object(ConfigDB)
api = AuthyApiClient(application.config['AUTHY_API_KEY'])
db = SQLAlchemy(application)
ma = Marshmallow(application)
cors = CORS(application)
