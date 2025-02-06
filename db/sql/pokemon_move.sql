CREATE TABLE IF NOT EXISTS pokemon_move (
    pokemon_id INT REFERENCES pokemon(id),
    move_id INT REFERENCES move(id),
    learn_method VARCHAR(50),
    learn_level INT, -- Null if the move isnt learned by level up
    PRIMARY KEY (pokemon_id, move_id)
);
