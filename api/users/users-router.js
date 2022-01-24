const {restricted} = require('../auth/auth-middleware');
const router = require('express').Router();
const Users = require("./users-model");
/**
  [GET] /api/users
  This endpoint is RESTRICTED: only authenticated clients
  should have access.

  --response if authenticated:
  status 200;; array of users
  --response on non-authenticated: // --> handled by middleware!
  status 401;; "message": "You shall not pass!"
 */
 
  router.get("/", restricted ,(req, res, next) => {
    Users.find()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(next)
  })
  
  module.exports = router;