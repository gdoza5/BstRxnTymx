let User = require('../models/user')

module.exports = {
    athlForms,
    crtAthl
}

function crtAthl(req, res, next) {
    
        User.findById(req.user, function(err, user) {
            console.log(req.user)
           console.log("xxxxxxxxx");
           console.log(user.teams.id(req.params.id),')(*()*&&)&786087-');
           console.log(user.teams.id(req.params.id).athletes,'9879038574984357984laksjdf;lakdsj')
            console.log(req.body, '_______-----------------');
            
            user.teams.id(req.params.id).athletes.push(req.body);
            console.log(req.user,')()())(&(*&)(&)(&*)(*')
            user.save(function(err){
                res.redirect('/accounts')
            })

   
        
    })
}

function athlForms(req, res, next) {
    User.findById(req.user, function(err, user) {
        console.log(req.user)
       console.log("xxxxxxxxx")
       console.log(user.teams.id(req.params.id))
    res.render('./athletes/athlforms', {
        team: user.teams.id(req.params.id)
    })
    })
}

