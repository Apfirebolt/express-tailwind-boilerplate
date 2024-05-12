import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import LocalStrategy from 'passport-local';

// Load user model
const User = mongoose.model('User');

const passportFunction = (passport) => {
  passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
    // Match user
    User.findOne({
      email:email
    }).then(user => {
      if(!user){
        return done(null, false, {message: 'No User Found'});
      } 
      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          return done(null, user);
        } else {
          return done(null, false, {message: 'Password Incorrect'});
        }
      })
    })
  }));

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id)
    .then(user => {
      done(null, user);
    });
  });
}

export default passportFunction;