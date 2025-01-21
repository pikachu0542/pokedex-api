CREATE TABLE IF NOT EXISTS pokemon_type {
    pokemon_id INT REFERENCES pokemon(id),
    type_id INT REFERENCES type(id),
    is_primary BOOLEAN,
    PRIMARY KEY (pokemon_id, type_id)
};
