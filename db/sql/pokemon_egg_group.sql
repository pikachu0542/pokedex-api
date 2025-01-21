CREATE TABLE IF NOT EXISTS pokemon_egg_group {
    pokemon_id INT REFERENCES pokemon(id),
    egg_group_id INT REFERENCES egg_group(id),
    PRIMARY KEY (pokemon_id, egg_group_id)
};
