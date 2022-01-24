//as always, DATA section
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const session = require('express-session');
const Store = require('connect-session-knex')(session); //persist in the database !
const userRouter = require('./users/users-router');
const authRouter = require('./auth/auth-router');

//LOGIC section
server.use(helmet());
server.use(express.json());
server.use(cors());

//const path = require('path'); //--> also needed for client app to work !
//server.use(express.static(path.join(__dirname, '../client'))); // --> this is used for when we have a client app built !!

server.use(session({
  name: 'chocolatechip',
  secret: process.env.SECRET || 'keep it secret.',
  cookie: {
    maxAge: 1000*60*60,
    secure: 0, //if tru only works on https
    httpOnly: 0 //...if this tru, javascript cannot read cookie
  },
  resave: 0, //ignore this
  saveUninitialized: 0, //if tru, server would always save session which we don't want for privacy reasons !
  store: new Store({
    knex: require('../data/db-config'), //this constructor object is what we need to persist in the db ! BE SURE YOU HAVE THE PATH NAME CORRECT CLAIRE !!
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: 1,
    clearInterval: 1000*60*60,

  })
}));

//router wiill go here 
server.use('/api/users',userRouter);
server.use('/api/auth',authRouter);

server.get("/", (req, res) => {
  res.json({ api: "up" });
});

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
