CREATE TABLE IF NOT EXISTS plants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    common_name VARCHAR(255),
    scientific_name VARCHAR(255),
    family VARCHAR(255),
    description TEXT,
    habitat TEXT,
    image_path VARCHAR(255)
);
