DROP TABLE IF EXISTS projects;

CREATE TYPE current_status AS ENUM ('in-progress', 'completed');

CREATE TABLE projects (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    completed_at TIMESTAMP DEFAULT now() NOT NULL,
    name TEXT NOT NULL,
    slug text unique not null,
    status current_status default 'in-progress' NOT NULL,
    collaborators TEXT[] DEFAULT ARRAY[]::TEXT[] NOT NULL
);
