
DROP TABLE IF EXISTS questions CASCADE;
CREATE TABLE questions (
  id BIGSERIAL PRIMARY KEY,
  product_id INT NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date_written BIGINT NOT NULL,
  asker_name VARCHAR(60) NOT NULL,
  asker_email VARCHAR(60) NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT 'f',
  helpfulness INT NOT NULL DEFAULT 0
);

DROP TABLE IF EXISTS answers CASCADE;
CREATE TABLE answers (
  id BIGSERIAL PRIMARY KEY,
  question_id INT NOT NULL,
  body VARCHAR(1000) NOT NULL,
  date_written BIGINT NOT NULL,
  answerer_name VARCHAR(60) NOT NULL,
  answerer_email VARCHAR(60) NOT NULL,
  reported BOOLEAN NOT NULL DEFAULT 'f',
  helpfulness INT NOT NULL DEFAULT 0,
  FOREIGN KEY(question_id) REFERENCES questions (id)
);

DROP TABLE IF EXISTS photos;
CREATE TABLE photos (
  id BIGSERIAL PRIMARY KEY,
  answer_id INT NOT NULL,
  photo_url VARCHAR(200) NOT NULL,
  FOREIGN KEY(answer_id) REFERENCES answers (id)
);

COPY questions FROM '/Users/jasonk87/HackReactor/Assignments/sdc_questions_answers_api/CSVs/questions.csv' CSV HEADER;
COPY answers FROM '/Users/jasonk87/HackReactor/Assignments/sdc_questions_answers_api/CSVs/answers.csv' CSV HEADER;
COPY photos FROM '/Users/jasonk87/HackReactor/Assignments/sdc_questions_answers_api/CSVs/answers_photos.csv' CSV HEADER;

SELECT setval('questions_id_seq', (SELECT MAX(id) FROM questions));
SELECT setval('answers_id_seq', (SELECT MAX(id) FROM answers));
SELECT setval('photos_id_seq', (SELECT MAX(id) FROM photos));
