const fs = require('fs');
const extract_students = require('./extract_git_students');

async function load_to_mongo() {

    const students = await extract_students();
    let content = `
const users = [
`;
    students.map(student => content += `
"${student}",
`);
    content += `
];

db.auth('root', 'root');
users.map(user => {
    db.adminCommand(
        {
        createUser: user,
        pwd: user,
        roles: [
            { role: "dbOwner", db: user }
        ]
        }
    );

    db = db.getSiblingDB(user);
    db.createCollection('welcome');

    db.welcome.insertOne(
        {
        message: "Welcome to your database"
        }
    );
}); 
    `;
    const mongo_file = "mongo/init/mongo-init.js";
    fs.writeFile(`${mongo_file}`, content, 'utf8', function (err) {
        if (err) {
            console.log(`An error occured while writing Javascript to ${mongo_file}`);
            return console.log(err);
        }
        console.log(`${mongo_file} has been saved.`);
    });

}

async function load_to_mysql() {

    const students = await extract_students();
    let content = "";

    students.map((student) => {
        content += `
CREATE DATABASE IF NOT EXISTS ${student};
CREATE TABLE IF NOT EXISTS ${student}.welcome (message VARCHAR(30));
INSERT INTO ${student}.welcome (message) VALUES ('Welcome to your database'); 
CREATE USER ${student}@'%' IDENTIFIED BY '${student}';
GRANT ALL ON ${student}.* TO ${student}@'%';
        `;
    });

    const mysql_file = "mysql/init/mysql-init.sql";

    fs.writeFile(`${mysql_file}`, content, 'utf8', function (err) {
        if (err) {
            console.log(`An error occured while writing SQL to ${mysql_file}`);
            return console.log(err);
        }
        console.log(`${mysql_file} has been saved.`);
    });

}

load_to_mysql();
load_to_mongo();