const lego = require('../../data/db-config');

/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
function find() {
  return lego('users').select('user_id', 'username');
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
function findBy(filter) {
  return lego('users').where(filter);
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
function findById(user_id) {
  return lego('users')
    .where('user_id', user_id )
    .first();
}

/**
  resolves to the newly inserted user { user_id, username }
 */
  async function add(user) {
    const [id] = await lego('users').insert(user);
  
    return findById(id);
  }

  //NOTE TO FUTURE CLAIRE:: 'DELETE' IS A RESERVED WORD BY JAVASCRIPT, HENCE WE MUST CALL THIS DELETEBYID !
 function deleteById(user_id) {
  return lego('users').where({ id: user_id }).del();

}

// Don't forget to add these to the `exports` object so they can be required in other modules

module.exports = {
  add,
  find,
  findBy,
  findById,
  deleteById
}