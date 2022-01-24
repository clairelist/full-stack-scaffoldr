//global data needed
const User = require('../users/users-model'); //--> used for checky functions, below

function restricted(req,res,next) {
  if(req.session.user){ //checks session, similar to magic line in auth router ! EZ
    next();
} else {
    next({status:401, message: 'You shall not pass!'});
}
}

async function checkUsernameFree(req,res,next) {
  try {
    const username = await User.findBy({ username: req.body.username });
    if (!username.length){ //if if this ^ array length is 0, we are happy and can go on. Pass the 'happy' path first !
      next();
    } else {
      res.status(422).json({message: 'Username taken'});
    }
  }catch (err) {
    res.status(500).json({message: 'BAD REQUEST MADE! ', error: err});
  }
}

//basically the opposite logic of the above username free func !
async function checkUsernameExists(req,res,next) {
  try{
    const username = await User.findBy({username: req.body.username});
    if(username.length){
      next();
    } else {
      res.status(401).json({message:'Invalid credentials'})
    }
  } catch(err){
    res.status(500).json({message: 'BAD REQUEST MADE! ', error: err});
  }
}

function checkPasswordLength(req,res,next) {
  if(!req.body.password || req.body.password.length < 3){
    res.status(422).json({message: 'Password must be longer than 3 chars'})
  } else {
    next();
  }
}

module.exports = {
  restricted,
  checkUsernameExists,
  checkPasswordLength,
  checkUsernameFree
}