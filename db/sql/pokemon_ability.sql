CREATE TABLE IF NOT EXISTS pokemon_ability {
    pokemon_id INT REFERENCES pokemon(id),
    ability_id INT REFERENCES ability(id),
    is_hidden BOOLEAN,
    PRIMARY KEY (pokemon_id, ability_id);
}
