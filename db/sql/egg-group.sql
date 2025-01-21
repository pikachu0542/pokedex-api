CREATE TABLE IF NOT EXISTS egg_group {
    id SERIAL PRIMARY KEY,
    group_name VARCHAR(25) NOT NULL
};

INSERT INTO egg_group (group_name)
VALUES
    ('Amorphous'),
    ('Bug'),
    ('Dragon'),
    ('Fairy'),
    ('Field'),
    ('Flying'),
    ('Grass'),
    ('Human-Like'),
    ('Mineral'),
    ('Monster'),
    ('Water 1'),
    ('Water 2'),
    ('Water 3'),
    ('Ditto'),
    ('Undiscovered');
