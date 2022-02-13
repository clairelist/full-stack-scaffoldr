This is a scaffold for a full CRUD API, using Node.js and Express, as well as a connected front end basic React app for handling user registration, login, and logout.

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
- as seen on TV in package.json, 