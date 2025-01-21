CREATE TABLE IF NOT EXISTS move {
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type INT NOT NULL REFERENCES type(id),
    description_text TEXT NOT NULL,
    category VARCHAR(10) NOT NULL,
    base_power INT,
    base_accuracy INT,
};
