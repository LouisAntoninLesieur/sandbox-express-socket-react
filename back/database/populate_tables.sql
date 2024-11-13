BEGIN;

INSERT INTO "admin" ("username", "email", "password") 
VALUES 
  ('admin1', 'HdC6o@example.com', 'password1')
  ;

INSERT INTO "users" ("username", "email", "password") 
VALUES 
  ('user1', 'o7HsO@example.com', 'password1'),
  ('user2', 'BtBb0@example.com', 'password2'),
  ('user3', '5A4o6@example.com', 'password3'),
  ('user4', 'qMg6i@example.com', 'password4'),
  ('user5', 'uHc2l@example.com', 'password5')
  ;

INSERT INTO "messages" ("sender_id", "message") 
VALUES 
  (1, 'Hello, how are you?'),
  (2, 'I am fine, thanks!'),
  (1, 'Where are you from?'),
  (3, 'I am from Paris'),
  (1, 'What is your favorite color?'),
  (4, 'My favorite color is blue'),
  (1, 'What is your favorite food?'),
  (5, 'My favorite food is pizza')
  ;

COMMIT;