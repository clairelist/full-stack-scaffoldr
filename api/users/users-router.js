const {restricted} = require('../auth/auth-middleware');
const router = require('express').Router();
const Users = require("./users-model");
 
  router.get("/", restricted ,(req, res, next) => {
    Users.find()
      .then(users => {
        res.status(200).json(users)
      })
      .catch(next)
  })
  
  //router DELETE requesty !
  //POST to '/delete_account', supply user id. Only accessable to logged in users !
  // --> MAYBE ADD: delete session token here, too.
  router.post('/delete_account', restricted, (req,res,next) => {
    //call Users.deleteById, passing in the id !
    const {user_id} = req.params.id; //let's write a test that this works !!
    Users.deleteById(user_id)
      .then(()=>{
        res.status(200).json({message: 'Your account was succesfully deleted!'})
      }).catch(err=>{
        next(err);
      })
  })

  //TODOS:: BUILD A CATCHALL ENDPOINT !
  module.exports = router;