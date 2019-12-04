const User = require('../models/user');

module.exports = {
    index
    
};



function index(req, res, next) {
    ///
    User.find({}).exec(function(err, user) {
    console.log(user)
    if(err) return(err);
    res.render('users/account', {
        user

        
        
    })
    
    })
}


