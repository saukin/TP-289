var dbconf = require('../../config/dbconf');

module.exports.list = (request, callback) => {
    dbconf.connection.connect();
    const req = "SELECT * FROM programmers";
    dbconf.connection.execute(req, (err, response) => {
        if (err) {
            return callback(true, "listMsg")
        }
        let list = []
        
        for (let i = 0; i < response.length; i++) {
            list[i] = response[i]
        } 
        callback(false, list);
    })
    
}

module.exports.byname = (request, callback) => {
    
    dbconf.connection.connect();
    // const req = `SELECT programmeur SUM (tasses) FROM programmers WHERE programmeur = "${request.body.requestValue}"`;
    const req = `SELECT  sum(tasses) AS ${request.body.requestValue} FROM programmers.programmers WHERE programmeur="${request.body.requestValue}"`;

    console.log(req)
    dbconf.connection.execute(req, (err, response) => {
        if (err) {
            return callback(true, "listMsg")
        }
        let list = []
        
        for (let i = 0; i < response.length; i++) {
            list[i] = response[i]
        } 
        callback(false, list);
    })
    
}

module.exports.byday = (request, callback) => {
    dbconf.connection.connect();
    console.log(`${request.body.requestValue}`)
    const req = `SELECT * FROM programmers WHERE jour = "${request.body.requestValue}"`;
    console.log(req)
    dbconf.connection.execute(req, (err, response) => {
        if (err) {
            return callback(true, "listMsg")
        }
        let list = []
        
        for (let i = 0; i < response.length; i++) {
            list[i] = response[i]
        } 
        callback(false, list);
    })
    
}