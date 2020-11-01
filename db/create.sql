DROP TABLE IF EXISTS user;
DROP TABLE IF EXISTS video;
DROP TABLE IF EXISTS article;
DROP TABLE IF EXISTS course;

CREATE TABLE user(id INTEGER PRIMARY KEY, name TEXT UNIQUE NOT NULL, phone TEXT UNIQUE NOT NULL);
CREATE TABLE article(id INTEGER PRIMARY KEY, header TEXT UNIQUE NOT NULL, content TEXT, course_id INTEGER, FOREIGN KEY(course_id) REFERENCES course(id));
CREATE TABLE video(id INTEGER PRIMARY KEY, url TEXT UNIQUE NOT NULL, title TEXT UNIQUE NOT NULL, description TEXT, course_id INTEGER, FOREIGN KEY(course_id) REFERENCES course(id));
CREATE TABLE course(id INTEGER PRIMARY KEY, id_article INTEGER UNIQUE,
        header TEXT NOT NULL, topic TEXT NOT NULL, length TEXT NOT NULL, description TEXT, FOREIGN KEY(id_article) REFERENCES article(id));

INSERT INTO course(id, id_article, header, topic, length, description) VALUES (1, 1, "Header 1", "Topic 1", "1h 30m", "Lorem ipsum...");
INSERT INTO course(id, id_article, header, topic, length, description) VALUES (2, 4, "Header 2", "Topic 2", "2h", "Lorem ipsum dolor sit amet...");
INSERT INTO course(id, id_article, header, topic, length) VALUES (3, 3, "Header 3", "Topic 3", "10m");
INSERT INTO course(id, id_article, header, topic, length) VALUES (4, 5, "Header 4", "Topic 4", "40m 30s");
INSERT INTO course(id, header, topic, length) VALUES (5, "Header 5", "Topic 5", "1h");

INSERT INTO user(id, name, phone) VALUES (1, "Peter", "12345");
INSERT INTO user(id, name, phone) VALUES (2, "Jane", "23456");
INSERT INTO user(id, name, phone) VALUES (3, "Apollo", "34567");
INSERT INTO user(id, name, phone) VALUES (4, "David", "45678");
INSERT INTO user(id, name, phone) VALUES (5, "Jay", "56789");

INSERT INTO video(id, url, title, description, course_id)
    VALUES (1, "MwZwr5Tvyxo", "Python Flask Tutorial: Full-Featured Web App Part 1 - Getting Started", NULL, 2);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (2, "QnDWIZuWYW0", "Python Flask Tutorial: Full-Featured Web App Part 2 - Templates", "AAAAA", NULL);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (3, "UIJKdCIEXUQ", "Python Flask Tutorial: Full-Featured Web App Part 3 - Forms and User Input", NULL, 1);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (4, "cYWiDiIUxQc", "Python Flask Tutorial: Full-Featured Web App Part 4 - Database with Flask-SQLAlchemy", NULL, NULL);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (5, "44PvX0Yv368", "Python Flask Tutorial: Full-Featured Web App Part 5 - Package Structure", "BBBBB", 1);
INSERT INTO video(id, url, title, description, course_id)
    VALUES (6, "CSHx6eCkmv0", "Python Flask Tutorial: Full-Featured Web App Part 6 - User Authentication", "CCCCCC", 1);

INSERT INTO article(id, header, content, course_id)
    VALUES (1, "Article 1!", "Mega useful text\n\n\nAnd again!", 1);
INSERT INTO article(id, header, content, course_id)
    VALUES (2, "Article 2!", "Mega useful text\n\n\nAnd again!", NULL);
INSERT INTO article(id, header, content, course_id)
    VALUES (3, "Article 3!", "Mega useful text\n\n\nAnd again!", 3);
INSERT INTO article(id, header, content, course_id)
    VALUES (4, "Article 4!", "Mega useful text\n\n\nAnd again!", 2);
INSERT INTO article(id, header, content, course_id)
    VALUES (5, "Article 5!", "Mega useful text\n\n\nAnd again!", 4);
