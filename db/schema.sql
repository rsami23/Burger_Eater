USE burgers_db;

CREATE TABLE burgers(
    id INT(10) AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(255),
    devoured BOOLEAN
)