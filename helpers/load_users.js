const fs = require('fs');
const extract_students = require('./extract_git_students');
const MONGO = "mongo";
const MYSQL = "mysql";
const MONGO_FILE = "mongo/init/mongo_course-init.js";
const MYSQL_FILE = "mysql/init/mysql_course-init.sql";

function get_name_user(name_user, database)
{
    switch(database)
    {
        case MONGO:
            return `${name_user}.split("_").join(" ")`;
        case MYSQL:
            return name_user.split("_").join(" ");
        default:
            return 'user';
    }
}


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
        message: "Welcome to your database " + ${get_name_user("user",MONGO)}
        }
    );
}); 
    `;
    
    fs.writeFile(`${MONGO_FILE}`, content, 'utf8', function (err) {
        if (err) {
            console.log(`An error occured while writing Javascript to ${MONGO_FILE}`);
            return console.log(err);
        }
        console.log(`${MONGO_FILE} has been saved.`);
    });

}

async function load_to_mysql() {

    const students = await extract_students();
    let content = "";

    students.map((student) => {
        content += `
CREATE DATABASE IF NOT EXISTS ${student};
CREATE TABLE IF NOT EXISTS ${student}.welcome (message VARCHAR(100));
INSERT INTO ${student}.welcome (message) VALUES ('Welcome to your database ${get_name_user(student,MYSQL)}'); 
CREATE USER ${student}@'%' IDENTIFIED BY '${student}';
GRANT ALL ON ${student}.* TO ${student}@'%';
        `;
    });

    fs.writeFile(`${MYSQL_FILE}`, content, 'utf8', function (err) {
        if (err) {
            console.log(`An error occured while writing SQL to ${MYSQL_FILE}`);
            return console.log(err);
        }
        console.log(`${MYSQL_FILE} has been saved.`);
    });

}

load_to_mysql();
load_to_mongo();