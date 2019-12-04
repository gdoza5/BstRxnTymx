const strava = require('strava-v3');
const router = require('express').Router()


module.exports = router


router.get('/runs', (req, res, next) => {
    strava.athlete.get(req.params.stravaId, function(err,payload,limits) {
        if (error) {
            console.error(error);
          } else {
            console.log('API called successfully. Returned data: ' + payload);
          }

    });
    res.render('runs', { title: 'Login in with Strava' });
})





router.get('/while', (req, res, next) => {
    strava.athlete.listActivities(req.params.stravaId, (err, payload, limits) => {
        if (!err) {
            
            res.json(payload)
        } else {
            console.error(err);
        }
        console.log(payload)
        res.render('runs', { title: 'Login in with Strava' });
    })
})