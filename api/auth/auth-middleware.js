//global data needed
const User = require('../users/users-model'); //--> used for checky functions, below
/*
  If the user does not have a session saved in the server
  status 401
  {"message": "You shall not pass!"}
*/
function restricted(req,res,next) {
  if(req.session.user){ //checks session, similar to magic line in auth router ! EZ
    next();
} else {
    next({status:401, message: 'You shall not pass!'});
}
}

/*
  If the username in req.body already exists in the database
  status 422
  {"message": "Username taken"}
*/
//will require the User object from model !
//check User.find(username.req.body);; if tru, error case (GED above).
async function checkUsernameFree(req,res,next) {
  try {
    const username = await User.findBy(req.body.username);
    if (username){
      res.status(422).json({message: 'Username taken'});
    } else {
      next();
    }
  }catch (err) {
    res.status(500).json({message: 'BAD REQUEST MADE! ', error: err});
  }
}

/*
  If the username in req.body does NOT exist in the database

  status 401
  {
    "message": "Invalid credentials"
  }
*/
async function checkUsernameExists(req,res,next) {
  try{
    const username = await User.findBy(req.body.username);
    if(!username){
      res.status(401).json({message:'Invalid credentials'})
    } else {
      next();
    }
  } catch(err){
    res.status(500).json({message: 'BAD REQUEST MADE! ', error: err});
  }
}

/*
  If password is missing from req.body, or if it's 3 chars or shorter

  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
*/
function checkPasswordLength(req,res,next) {
  const passlength = req.body.password;
  if(passlength.length < 3 || !passlength) {
    res.status(422).json({message: 'Password must be longer than 3 chars'});
  } else {
    next();
  }
}

// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  restricted,
  checkUsernameExists,
  checkPasswordLength,
  checkUsernameFree
}