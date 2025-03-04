DROP TABLE IF EXISTS tasks;

CREATE TABLE tasks ( 
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
    name TEXT NOT NULL,
    status current_status DEFAULT 'in-progress' NOT NULL,
    description TEXT NOT NULL,
    due_date DATE DEFAULT NULL,
    project_id BIGINT REFERENCES projects (id),
    collaborators TEXT[] DEFAULT ARRAY[]::TEXT[] NOT NULL
);
