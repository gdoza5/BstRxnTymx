const User = require('../models/user');

module.exports = {
        index,
        crtTeam,
        tmform,
        delete: deleteT,
        update: updateT,
        tmedit
};

function updateT(req, res, next) {
    console.log('llego update********')
    console.log(req.body)
    User.findById(req.user, function(err, user) {
         for (var i=0;i < user.teams.length; i++) {
             console.log(user.teams[i]._id)
             console.log(req.body.id)
            if (user.teams[i]._id == req.body.id) {
                console.log("*******************************")
                user.teams[i].name = req.body.name
                user.teams[i].sport = req.body.sport
                break; //Stop this loop, we found it!
            }
         }
        user.save (function(err) {
            if (err) return next(err)
            res.redirect(`/accounts`)
        })
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


function index(req, res, next) {
    ///
   User.findOne({}, function(err, user) {
    res.render('./accounts', {user})
   })
}

function tmform(req, res, next) {
    res.render('./tmforms', {})
}
function tmedit(req, res, next) {
    User.findById(req.user, function(err, user) {
       console.log("xxxxxxxxx")
       console.log(user.teams.id(req.params.id))
    res.render('./tmedit', {
        team: user.teams.id(req.params.id) 
    })
})
}



function crtTeam(req, res, next){
    req.user.teams.push(req.body);
    req.user.save(function(err){
        res.redirect('/accounts');
    })
}

