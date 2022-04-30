

const queryWelcomeMessage =`SELECT message from welcome`;

executeQuery(queryWelcomeMessage,function(err, rows, fields){

     if (err) throw err;

     const message = rows[0].message;

     return res.send(message);
 });