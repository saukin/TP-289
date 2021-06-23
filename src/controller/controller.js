const model = require("../model/model");

module.exports.controller = (req, res, callback) => {
    let action = req.body.action;
    
    switch(action) {
        case "list":
            console.log("LISTER TOUS")
            model.list(req, (err, resp) => {
                if (err) return callback(true, resp);
                callback(false, resp);
            }) 
            break;
        case "name":
            console.log("LISTER PAR NOM")
            model.byname(req, (err, resp) => {
                
                if (err) {
                    return callback(true, resp);
                }
                callback(false, resp);
            }) 
            break;
        case "day":
            console.log("LISTER PAR DAY")
            model.byday(req, (err, resp) => {
                if (err) return callback(true, resp);
                callback(false, resp);
            }) 
            break;
    }
} 

