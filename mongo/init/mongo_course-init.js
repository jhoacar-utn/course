
const users = [

"agustin_ekkert_pazo",

"cynthia_altmark",

"evelyn_castillo",

"federico_arabena",

"jhoan_carrero",

"jose_carballo",

"lautaro_salazar_de_moya",

"liam_marin",

"mario_martinez_galarza",

"matias_eckhardt",

"maximiliano_vitti",

"nicolas_maurizi",

"pablo_defelitto",

"santiago_franchi",

"veronica_ferreyra",

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
    