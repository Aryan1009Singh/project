const express = require('express')
    , passport = require('passport')
    , MicrosoftStrategy = require('passport-microsoft').Strategy
    , session = require('express-session');

const client_id = '2059b3a0-07e1-4d02-ae6a-72d5691d4181';
const client_secret = 'zyj8Q~GUe1DlWoISRhh7tWaLYrLdOSBVqQsG9a7x';
const frontend_url = 'http://localhost:3000';

//Passport setup

console.log("Server running");

//Serialize and Deserialize
passport.serializeUser(function (user, done){
    done(null, user);
});

passport.deserializeUser(function (obj, done){
    done(null, obj);
});

//Use Microsoft Strategy
passport.use(new MicrosoftStrategy({
    clientID: client_id,
    clientSecret: client_secret,
    callbackURL: 'http://localhost:5000/auth/microsoft/callback',
    scope: ['user.read']
},
    function(accessToken, refreshToken, profile, done) {
        process.nextTick(function () {
            return done(null, profile);
        });
    }
));


//Express app setup
const app = express();

app.use(session({
    secret: 'hehe',
    resave: false,
    saveUnitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', ensureAuthenticated, (req, res) => {
    console.log(req.user._raw);
    res.send ('<div> Home! ' + req.user.displayName + '</div>');
});

app.get('/login', (req, res) => {
    res.send( '<a href = "/auth/microsoft"> Login </a>');
});

app.get('/auth/microsoft',
    passport.authenticate('microsoft', {

    }),
    (req, res) => {
        //The request will be redirected to microsoft, so this
        //function will not be called.
    });

app.get('/auth/microsoft/callback',
    passport.authenticate('microsoft', { failureRedirect: frontend_url + '/'}),
    (req, res) => {
        console.log(req.user);
        res.redirect(frontend_url + '/');
    });

app.get('/checkLoggedIn', (req, res) => {
    if (req.isAuthenticated()) { res.redirect(frontend_url + '/?token=' + req.query.token) }
    else { res.redirect(frontend_url + '/login'); }
});

app.listen(5000, () => {
    console.log('Listening on localhost:5000');
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
};