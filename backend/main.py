import os

from backend.utils import conn, cursor, application


with open(os.path.join("db", "create.sql")) as f:
    cursor.executescript(f.read())
    conn.commit()


if __name__ == '__main__':
    application.run(debug=True, host="0.0.0.0")
