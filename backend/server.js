import Users from './schemas/user.js';
import Items from './schemas/item.js';
import LoginSessions from './schemas/loginSession.js';
import mongoose from 'mongoose';
import express from 'express';
import passport from 'passport';
import pm from 'passport-microsoft';
import session from 'express-session';
import cors from 'cors';
import axios from 'axios';

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
app.use(cors());

//api routes
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
        
        const user = {
            name: req.user._json.displayName,
            roll: req.user._json.surname,
            email: req.user._json.mail,
        };

        var error = false;
        var er;
        Users.where("roll").equals(user.roll).exec((err, data) => {
            if (err){
                error = true;
                er = err;
            }
            else{
                if(data.length > 0){
                    // console.log(data);
                }
                else{
                    Users.create(user, (err, data) => {
                        if (err){
                            error = true;
                            er = err;
                        }
                    });

                }
            }
        });
    
        var token;
        if (!error){
            token = genToken();
            fetchUser(token).then((usr) => {
                if (!usr.error){
                    console.log(usr.error);
                    token = genToken();
                }

                LoginSessions.create({token: token, roll: user.roll}, (err, data) => {
                    if (err){
                        error = true;
                        er = err;
                    }
                });

                if (error){
                    res.status(500).send(er);
                }
                else{
                    res.redirect(frontend_url + '/login' + "?token=" + token);
                }
            });
        }
    });

app.get('/user/get', (req, res) => {
    const token = req.query.token;
    console.log(token);
    if (token){
        fetchUser(token).then((user) => {
            res.status(201).send(user);
        });
    }
    else{
        res.status(500).send({error: "No token"});
    }
});

app.get('/user/logout', (req, res) => {
    const token = req.query.token;
    if (token){
        LoginSessions.deleteOne({token: token}).then((data) => {
            res.status(201).send({done: true});
        });
    }
    else{
        res.status(500).send({error: "No token"});
    }
});

app.post('/item/new', (req, res) => {
    const item = req.query;
    console.log(item);
    fetchUser(req.query.token).then((user) => {
        if (!user.error){
            item.roll = user.roll;
            Items.create(item, (err, data) => {
                if (err){
                    res.status(500).send(err);
                }
                else{
                    res.status(201).send(data);
                }
            });
        }
        else{
            res.status(500).send(user);
        }
    });
    
});

app.listen(5000, () => {
    console.log('Listening on localhost:5000');
});

const fetchUser = (token) => {
    var ret;
    LoginSessions.where('token').equals(token).exec((err, data) => {
        console.log(token);
        if (err || data.length == 0){
            ret = {error: true};
        }
        else{
            Users.where('roll').equals(data[0].roll).exec((err, data) => {
                if (err || data.length == 0){
                    ret = {error: true};
                }
                else{
                    ret = data[0];
                }
            });
        }
    });

    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(ret);
        },500);
      });
};

const chars = "abcdefghijklmnopqrstuvwxyz0123456789~ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const l = chars.length;
const genToken = function(){
    var tok = "";
    for (let i = 0; i <= 36; i++){
        let w = Math.floor(Math.random() * l);
        tok += chars[w];
    }
    return tok;
};