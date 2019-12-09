let User = require('../models/user')

module.exports = {
    show,
}

function show(req, res) {
    console.log(req.params.id)
    User.findOne({'teams._id': req.params.id}), function(err, user) {
        res.render('/accounts'), {
            user,
            
        }
    }
    
}