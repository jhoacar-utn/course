
const users = [

"jhoan_carrero",

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
        message: "Welcome to your database " + user.split("_").join(" ")
        }
    );
}); 
    