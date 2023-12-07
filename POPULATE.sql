-- Inserting dummy data into the "organization" table
INSERT INTO organization (email, address, name, description, goals)
VALUES
  ('amilpa2020@gmail.com', '123 Main Street, Cityville', 'Organization 1', 'A non-profit organization focusing on education.', 'Empower communities through education');

-- Inserting dummy data into the "skills" table
INSERT INTO skills (name)
VALUES
  ('Communication'),
  ('Project Management'),
  ('Fundraising'),
  ('Environmental Awareness'),
  ('First Aid');

-- Inserting dummy data into the "volunteer" table
INSERT INTO volunteer (email, name, experience, education, occupation, about)
VALUES
  ('amilpa2017@gmail.com', 'Volunteer 1', '2 years volunteering at local shelter', 'Bachelor of Arts in Sociology', 'Social Worker', 'Passionate about helping those in need');

-- Inserting dummy data into the "event" table
INSERT INTO event (eventName, eventGoals, eventExpectedTime, eventDescription, organizationid)
VALUES
  ('Community Workshop', 'Educate community members on environmental issues', 90, 'An interactive workshop to raise awareness about environmental challenges.', 1),
  ('Health Fair', 'Promote healthy living through interactive activities', 120, 'A fair to provide health resources and education to the community.', 1),
  ('Tech Symposium', 'Showcase and discuss technological advancements', 180, 'A symposium to explore and share insights on the latest technology trends.', 1),
  ('Education Seminar', 'Promoting knowledge sharing in the community', 120, 'An informative seminar to share knowledge and insights.', 1),
  ('Art Exhibition', 'Fostering creativity in the community', 150, 'An exhibition showcasing local art and creativity.', 1),
  ('Sports Tournament', 'Promoting health and teamwork', 120, 'A community sports tournament to promote health and teamwork.', 1);

-- Inserting dummy data into the "volunteer_skills" table
INSERT INTO volunteer_skills (user_id, skill_id)
VALUES
  (1, 1),
  (1, 2),
  (1, 3),
  (1, 4),
  (1, 5);

-- Inserting dummy data into the "application" table
INSERT INTO application (volunteerid, eventid, message)
VALUES
  (1, 1, 'Excited to contribute my skills to the environmental workshop.'),
  (1, 3, 'I have experience in organizing tech-related events and would love to help with the symposium.'),
  (1, 2, 'As a social worker, I am eager to participate in the health fair and support the community.');

-- Note: Make sure to adjust the data based on your specific requirements and relationships between the tables.
