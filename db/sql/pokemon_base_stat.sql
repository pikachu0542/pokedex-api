CREATE TABLE IF NOT EXISTS pokemon_base_stat (
    pokemon_id INT PRIMARY KEY REFERENCES pokemon(id),
    hp INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    special_attack INT NOT NULL,
    special_defense INT NOT NULL,
    speed INT NOT NULL,
    total INT NOT NULL,
);
