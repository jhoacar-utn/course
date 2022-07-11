const startDbConnection = require('../../config/initDbs')

module.exports = handleStartServer = async function (){
    console.log(
        `Api listen en URL http://localhost:${this.address().port}/api/v1`
        );
    startDbConnection()
}
