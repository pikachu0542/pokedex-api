CREATE TABLE IF NOT EXISTS pokemon (
    id SERIAL PRIMARY KEY,
    dex_no INT NOT NULL,
    name VARCHAR(25) NOT NULL,
    evolution_id INT,
    generation INT NOT NULL,
    image_url VARCHAR(255),
    species VARCHAR(50) NOT NULL,
    height DECIMAL,
    weight DECIMAL,
    catch_rate INT,
    base_friendship INT,
    base_exp INT,
    growth_rate VARCHAR(20),
    egg_cycles INT,
    male_percent DECIMAL,
    is_genderless BOOLEAN
);
