from flask import Flask
from app.config import Config, Configdb
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from app import routes, models


app = Flask(__name__)
app.config.from_object(Config)
app.config.from_object(Configdb)
db = SQLAlchemy(app)
migrate = Migrate(app, db)
