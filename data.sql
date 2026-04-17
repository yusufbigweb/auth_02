CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT,
    email TEXT UNIQUE,
    password TEXT
);

INSERT INTO users (name, email, password)
VALUES ('Yusuf Shaikh', 'yusufshaikh00071@gmail.com', 'yusuf@9168553378')