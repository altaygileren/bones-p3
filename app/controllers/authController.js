const authModel =  require('../models/auth');

// holds users logged in by the system 
const currentUsers = [];


function UserTimeout(user) {
  currentUsers.push(user);
  // must use anonymous function or results in a callback-promise BS error
  setTimeout((dataLol) => {
    for (let i = 0; i < currentUsers.length; i += 1 ){
      console.log(user, 'anon');
      if (user.username === currentUsers[i].username) {
        currentUsers.splice(i, 1);
        console.log('User:'+ currentUsers[i].username + 'has been logged off');
      }   
    }
  }, 360000);
}
// creates a token for quick verification and never lets 
// the client see the full hash
function createToken(password_digest) {
  let token = '';
  for(let i = 0; i < 60; i += 1) {
    if ((i + 1) % 3 === 0 ) {
      token += password_digest.charAt(i);
    }
  }
 return token;
}



// express routing functions
module.exports = {

createUser(req, res, next) {
    authModel.create(req.body)
      .then(user => {
        let data = {
          token: createToken(user.password_digest),
          username: user.username
        }
        delete user.password_digest;
        res.locals.user = data;
        UserTimeout(data);
        console.log(currentUsers,'logged in');
        next();
      });
  },
currentUsers  

}
