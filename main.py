from routes import *


db.create_all()

if __name__ == '__main__':
    application.run(debug=True)
