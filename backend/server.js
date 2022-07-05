import User from './schemas/user.js';
import Items from './schemas/item.js';
import mongoose from 'mongoose';
import express from 'express';
import passport from 'passport';
import pm from 'passport-microsoft';
import session from 'express-session';

const MicrosoftStrategy = pm.Strategy;

const client_id = '2059b3a0-07e1-4d02-ae6a-72d5691d4181';
const client_secret = 'zyj8Q~GUe1DlWoISRhh7tWaLYrLdOSBVqQsG9a7x';
const frontend_url = 'http://localhost:3000';

const connection_url = 'mongodb+srv://admin:jbzam6YUZO74PjlZ@cluster0.7u9no.mongodb.net/campusOLX?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once("open", () => {
    console.log("DB connected");
});


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



function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) { return next(); }
    res.redirect('/login');
};
//api routes
app.get('/users/fetch', (req, res) => {
    Users.findOne({roll: req.query.roll}, (err, data) => {
        if (err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    });
});

app.post('/users/register', (req, res) => {
    const user = {
        name: req.query.name,
        roll: req.query.roll,
        email: req.query.email,
        contact: req.query.contact
    };
    console.log(user);

    Users.create(user, (err, data) => {
        if (err){
            console.log(err);
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    });
});

app.listen(5000, () => {
    console.log('Listening on localhost:5000');
});


