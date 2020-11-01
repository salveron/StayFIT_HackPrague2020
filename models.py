from utils import db, ma


class User(db.Model):
    __tablename__ = "user"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    phone = db.Column(db.String(15), unique=True, nullable=False)

    def __repr__(self):
        return f"User: name - {self.name}, phone - {self.phone}"


class Video(db.Model):
    __tablename__ = "video"
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(150), unique=True, nullable=False)
    title = db.Column(db.String(150), unique=True, nullable=False)
    description = db.Column(db.String(500), nullable=True)
    course_id = db.Column(db.Integer, db.ForeignKey("course.id"), nullable=True)


class Article(db.Model):
    __tablename__ = "article"
    id = db.Column(db.Integer, primary_key=True)
    header = db.Column(db.String(250), unique=True, nullable=False)
    text = db.Column(db.String(2500), nullable=True)
    course_id = db.Column(db.Integer, db.ForeignKey("course.id"), nullable=True)


class Course(db.Model):
    __tablename__ = "course"
    id = db.Column(db.Integer, primary_key=True)
    article = db.relationship("Article", uselist=False)
    videos = db.relationship("Video")


class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User

    id = ma.auto_field()
    name = ma.auto_field()
    phone = ma.auto_field()


class VideoSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Video

    id = ma.auto_field()
    url = ma.auto_field()
    title = ma.auto_field()
    description = ma.auto_field()


class ArticleSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Article

    id = ma.auto_field()
    header = ma.auto_field()
    text = ma.auto_field()
