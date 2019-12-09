const User = require('../models/user');

module.exports = {
    index,
    delete: deleteT
    
};



function index(req, res, next) {
    ///
   User.find({}, function(err, users) {
    console.log('Aqui !!!!!!!!!!!!!!!!!!!!!!!')
    res.render('/users', {users})
   })
}

function deleteT(req, res, next) {
    console.log("llego delete")
    User.findById(req.user, function(err, user) {
        user.teams.id(req.params.id).remove();
        user.save(function (err) {
            if(err) return(err);
            res.redirect('/accounts')
        });

    })
}


