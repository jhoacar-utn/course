
CREATE DATABASE IF NOT EXISTS jhoan_carrero;
CREATE TABLE IF NOT EXISTS jhoan_carrero.welcome (message VARCHAR(100));
INSERT INTO jhoan_carrero.welcome (message) VALUES ('Welcome to your database jhoan carrero'); 
CREATE USER jhoan_carrero@'%' IDENTIFIED BY 'jhoan_carrero';
GRANT ALL ON jhoan_carrero.* TO jhoan_carrero@'%';
        