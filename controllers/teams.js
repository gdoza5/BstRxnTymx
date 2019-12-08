let User = require('../models/user')

module.exports = {
    
}

function crtTeam(req, res, next){
    console.log(req);
    req.user.teams.push(req.body);
    console.log("Dat Body", req.body)
    req.user.save(function(err){
        res.redirect('./accounts');
    })
}