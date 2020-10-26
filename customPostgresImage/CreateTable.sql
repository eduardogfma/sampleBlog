CREATE TABLE posts(
   postid SERIAL PRIMARY KEY,
   posttitle VARCHAR(255) NOT NULL,
   postbody TEXT
);