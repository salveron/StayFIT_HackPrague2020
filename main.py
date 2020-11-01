import os

from routes.routes import *
from routes.get_routes import *
from utils import conn, cursor, application


with open(os.path.join("db", "create.sql")) as f:
    cursor.executescript(f.read())
    conn.commit()


if __name__ == '__main__':
    application.run(debug=True)
