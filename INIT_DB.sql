DROP TABLE application;
DROP TABLE volunteer_skills;
DROP TABLE event;
DROP TABLE skills;
DROP TABLE volunteer;
DROP TABLE organization;

CREATE TABLE organization (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    address VARCHAR(255),
    name VARCHAR(255),
    description VARCHAR(255),
    goals VARCHAR(255)
);

CREATE TABLE volunteer (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    name VARCHAR(255),
    experience VARCHAR(255),
    education VARCHAR(255),
    occupation VARCHAR(255),
    about VARCHAR(255)
);

CREATE TABLE event (
    id SERIAL PRIMARY KEY,
    eventName VARCHAR(255),
    eventGoals VARCHAR(255),
    eventExpectedTime INT,
    eventDescription VARCHAR(255),
    organizationid INT,
    FOREIGN KEY (organizationid) REFERENCES organization(id)
);

CREATE TABLE application (
      id SERIAL PRIMARY KEY,
      volunteerid INT,
      eventid INT,
      message VARCHAR(255),
      FOREIGN KEY (volunteerid) REFERENCES volunteer(id),
      FOREIGN KEY (eventid) REFERENCES event(id)
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE volunteer_skills (
    id SERIAL PRIMARY KEY,
    user_id INT,
    skill_id INT,
    FOREIGN KEY (user_id) REFERENCES volunteer(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
);

