CREATE TABLE IF NOT EXISTS move (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    type INT NOT NULL REFERENCES type(id),
    category VARCHAR(10),
    effect TEXT NOT NULL,
    power INT,
    accuracy INT,
    pp INT,
);
