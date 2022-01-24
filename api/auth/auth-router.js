// Require `checkUsernameFree`, `checkUsernameExists` and `checkPasswordLength`
// middleware functions from `auth-middleware.js`. You will need them here!
const {checkUsernameFree} = require('./auth-middleware');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require("../users/users-model");
/**
  1 [POST] /api/auth/register { "username": "sue", "password": "1234" }

  response:
  status 200
  {"user_id": 2, "username": "sue"}
  response on username taken: -->handled by middleare
  status 422
  {"message": "Username taken"}

  response on password three chars or less: -->handled by middleare
  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
 */
//TODO when I get back from braek: build and include here password checky middleware!
router.post('/register',checkUsernameFree, async (req,res,next)=>{
  try {
    //pull creds from req body
    const {username, password} = req.body;

    //hash the passwordr! 
    const hash = bcrypt.hashSync(password, 8); //pass the thing being hashed, then the number of passes (see cryptography docs in canvas?) this nuymber has to do with configured 'slowness', and it actually represents 2^8 hashes

    //store in database !
    const newUser = {username, password: hash};
    //storing password as hash means we are not storing the password itself in the database!
    const inserted = await User.add(newUser);

    //then, we respond
    res.status(200).json(newUser,{message:` Welcome ${inserted}`})
  } catch(err) {
    next(err)
  }
})

/**
  2 [POST] /api/auth/login { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "message": "Welcome sue!"
  }

  response on invalid credentials:
  status 401
  {
    "message": "Invalid credentials"
  }
 */


/**
  3 [GET] /api/auth/logout

  response for logged-in users:
  status 200
  {
    "message": "logged out"
  }

  response for not-logged-in users:
  status 200
  {
    "message": "no session"
  }
 */

 
// Don't forget to add the router to the `exports` object so it can be required in other modules
