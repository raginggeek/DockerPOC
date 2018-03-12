CREATE TABLE user_metadata
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    project VARCHAR(50) NOT NULL
);
CREATE UNIQUE INDEX user_metadata_id_uindex ON user_metadata (id);
CREATE INDEX user_metadata_name_index ON user_metadata (name);
COMMENT ON TABLE user_metadata IS 'list of users metadata'