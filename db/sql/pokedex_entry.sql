CREATE TABLE IF NOT EXISTS pokedex_entry (
    pokemon_id INT REFERENCES pokemon(id),
    game_id INT REFERENCES game(id),
    entry_text TEXT NOT NULL,
    PRIMARY KEY (pokemon_id, game_id)
);
