This is a scaffold for a fullstack app, using Node.js and Express for the backend, as well as a connected front end basic React app for handling user registration, login, and logout.

--> In `api/` you will find:
- server.js, where the server herself lives!
- an `auth` folder, which contains basic middleware for routing, as well as an authentication router skeleton already built for you!
- a `users` folder, which contains the database access `users-model` file, and the users' router.

--> [DATABASE] ::
- currently built using Sqlite3, but dev can update this as needed. See [VERSION-NOTES], below.
- this means the `users-model` functions, and the `knexfile.js`, migrations, and seeds are dependant on this version of sqlite3. 

--> [ENDPOINTS] (SERVER SIDE FUNC DESKY)::
- you can currently:
- POST to `/register`, for inserting a user into the database, saving their credentials to a token.
- POST to `/login`, for login functionality.
- GET to `/logout`, which deletes the user token.
- POST to `/`, to retrieve all users.

--> [ENDPOINTS] (CLIENT SIDE FUNC DESKY)::
- you can currently:
- POST to `/register` and create a user account.
- POST to `/login`, provided correct credentials, allows the user to access private parts of the site (uses an older version of react-router, see [VERSION-NOTES] below)
- IMPORTANT: AS OF 2/13/22 THE CLIENT SIDE IS UNDERGOING CHANGES AND WILL UPDATE THIS README WHEN SAID FUNCTIONALITY IS WORKING.

--> [VERSION-NOTES]
- as seen o̶n̶ T̶V̶  in `package.json`, an older version of sqlite3 is being used (ver 5.0.2), due to some breaking changes on Windows (Claire will have to play with the new version, so hopefully this part will be deprecated and excised soon !)
- further, in `client/package.json`, react-router-dom version 5.3.0 is still in use, again because Claire has not had time to play with the most recent version. Again, when she has had time to update her knowledge base this comment will be deprecated :-) 