
CREATE DATABASE IF NOT EXISTS jhoan_carrero;
CREATE USER jhoan_carrero@'%' IDENTIFIED BY 'jhoan_carrero';
GRANT ALL ON jhoan_carrero.* TO jhoan_carrero@'%';
