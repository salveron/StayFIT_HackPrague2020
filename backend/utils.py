from flask import Flask
from authy.api import AuthyApiClient
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_session import Session
import sqlite3

from config import Config


application = Flask(__name__)
application.config.from_object(Config)

api = AuthyApiClient(application.config['AUTHY_API_KEY'])
conn = sqlite3.connect('db/app.db', check_same_thread=False)
cursor = conn.cursor()

ma = Marshmallow(application)
cors = CORS(application)
sess = Session()
sess.init_app(application)
