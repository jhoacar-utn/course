const fs = require('fs');
const extract_students = require('./extract_git_students');

async function create_firebase_config() {

    const firebase_config = {
        hosting: {
            rewrites: [
                {
                    source: "/",
                    function: "welcome"
                }
            ]
        }
    }
    const students = await extract_students();

    students.map(student=>{
        firebase_config.hosting.rewrites.push({
            source: student,
            function: student
        });
    });



    fs.writeFile("firebase.json", JSON.stringify(firebase_config) , 'utf8', function (err) {
        if (err) {
            console.log("An error occured while writing JSON Object to firebase.json");
            return console.log(err);
        }
        console.log("firebase.json has been saved.");
    });

}

create_firebase_config();