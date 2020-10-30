from app import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(64), index=True)
    email = db.Column(db.String(120), index=True)
    location = db.Column(db.String(128))
