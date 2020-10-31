from routes.add_routes import *
from routes.get_routes import *
from routes.routes import *


db.create_all()

if __name__ == '__main__':
    application.run(debug=True)
