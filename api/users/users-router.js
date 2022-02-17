//TODOS:: BUILD GET USER BY FILTER ENDPOINT
//REFACTOR ? DEL ENDPOINT (CURRENTLY USING A POST METHOD, RATHER THAN A DELETE METHOD WITH THE /:id PARAMETER!)
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
  //OR:: YOU CAN DO A DELETE REQUEST TO THE USER W THE SPECIFIC ID, REPLICATING A GET SINGLE USER ENDPOINT ! (which we also should build)
  router.post('/delete_account', restricted, (req,res,next) => {
    //call Users.deleteById, passing in the id !
    const {user_id} = req.params.id; //let's write a test that this works !!
    Users.deleteById(user_id)
      .then(()=>{
        // res.status(200).json({message: 'Your account was succesfully deleted!'})
        req.session.destroy((err)=>{ //logout delete sessiony logic here ! So it goes 'delete user in the db, and then log them out !'
          if (err){
              res.json({message: 'bad request !', status: 500})
          } else {
              res.json({message: 'Your account was succesfully deleted!', status: 200})
          }
      }).catch(err=>{
        next(err);
      })
  })})

  //TODOS:: BUILD A CATCHALL ENDPOINT !
  module.exports = router;