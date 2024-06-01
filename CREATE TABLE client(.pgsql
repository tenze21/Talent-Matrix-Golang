CREATE TABLE client(
    client_id SERIAL PRIMARY KEY,
    full_name Varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    phone_number int UNIQUE NOT NULL,
    dzongkhag varchar(255) NOT NULL,
    region varchar(255) NOT NULL,
    organization_name varchar(255) DEFAULT NULL,
    password varchar(500) NOT NULL
);

CREATE TABLE client_profile(
    client_id int NOT NULL PRIMARY KEY,
    profile BYTEA,
    CONSTRAINT cid_fk FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE talent1(
    talent_id SERIAL PRIMARY KEY,
    full_name Varchar(255) NOT NULL,
    email varchar(255) UNIQUE NOT NULL,
    cid int UNIQUE NOT NULL,
    phone_number int UNIQUE NOT NULL,
    dzongkhag varchar(255) NOT NULL,
    region varchar(255) NOT NULL,
    password varchar(500) NOT NULL,
    portfolio_link varchar(500) DEFAULT NULL
);

CREATE TABLE talent2(
    talent_id int NOT NULL PRIMARY KEY,
    user_name varchar(255) UNIQUE NOT NULL,
    bio varchar(1000) NOT NULL,
    school varchar(255) NOT NULL,
    education_from DATE DEFAULT NULL,
    education_to DATE DEFAULT NULL,
    field_of_study varchar(255) DEFAULT NULL,
    expertise varchar(255) NOT NULL,
    category varchar(255) NOT NULL,
    experience varchar(255) NOT NULL,
    company varchar(255) DEFAULT NULL,
    title varchar(255) DEFAULT NULL,
    employment_from DATE DEFAULT NULL,
    employment_to DATE DEFAULT NULL,
    facebook varchar(255) DEFAULT NULL,
    twitter varchar(255) DEFAULT NULL,
    linkedin varchar(255) DEFAULT NULL,
    CONSTRAINT id_fk FOREIGN KEY (talent_id) REFERENCES talent1(talent_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE talent_profile(
    talent_id int NOT NULL PRIMARY KEY,
    profile BYTEA,
    CONSTRAINT tid_fk FOREIGN KEY (talent_id) REFERENCES talent1(talent_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE project(
    project_id SERIAL NOT NULL PRIMARY KEY,
    title varchar(255) NOT NULL,
    description varchar(500) NOT NULL,
    scope varchar(20) NOT NULL,
    skills varchar (255) NOT NULL,
    payment int NOT NULL,
    hires varchar(255) DEFAULT NULL
);

CREATE TABLE hire_request(
    req_id int NOT NULL PRIMARY KEY,
    client_id int NOT NULL,
    talent_id int NOT NULL,
    project_id int NOT NULL,
    CONSTRAINT cid_fk FOREIGN KEY (client_id) REFERENCES client(client_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT tid_fk FOREIGN KEY (talent_id) REFERENCES talent1(talent_id) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT pid_fk FOREIGN KEY (project_id) REFERENCES project(project_id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE admin(
    admin_id SERIAL PRIMARY KEY,
    profile BYTEA,
    email varchar(255) NOT NULL,
    password varchar(500) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role varchar(255) NOT NULL,
    address varchar(255) NOT NULL
);

DROP TABLE project;