/**
  Do what needs to be done to support sessions with the `express-session` package!
  To respect users' privacy, do NOT send them a cookie unless they log in.
  This is achieved by setting 'saveUninitialized' to false, and by not
  changing the `req.session` object unless the user authenticates.

  Users that do authenticate should have a session persisted on the server,
  and a cookie set on the client. The name of the cookie should be "chocolatechip".

  The session can be persisted in memory (would not be appropriate for production)
  or you can use a session store like `connect-session-knex`.
 */
//as always, DATA section
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const server = express();
const session = require('express-session');
const Store = require('connect-session-knex')(session); //persist in the database !

//LOGIC section
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use(session({
  name: 'monkey3',
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
