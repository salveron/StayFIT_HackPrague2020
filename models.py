from utils import db, ma


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    phone = db.Column(db.String(15), unique=True, nullable=False)

    def __repr__(self):
        return f"User: name - {self.name}, phone - {self.phone}"


class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User

    id = ma.auto_field()
    name = ma.auto_field()
    phone = ma.auto_field()
