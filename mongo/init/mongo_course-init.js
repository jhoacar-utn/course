
const users = [

"agustin_ekkert_pazo",

"cynthia_altmark",

"emiliano_andino",

"esteban_murphy",

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
    
    db = db.getSiblingDB(user);
    db.createUser(
        {
            user: user,
            pwd:  user,
            roles: [ { role: "readWrite", db: user } ]
        }
    )
    db.createCollection('welcome');

    db.welcome.insertOne(
        {
        message: "Welcome to your database " + user.split("_").join(" ")
        }
    );
}); 
    