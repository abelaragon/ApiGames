CREATE DATABASE ng_game_db;

use ng_game_db;

CREATE TABLE games(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (180),
    description VARCHAR(255),
    image VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR (100),
    password VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

describe game;
describe users;
