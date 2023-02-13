const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  constructor() {
    this.stations = {
      "station1": [],
      "station2": [],
      "station3": []
    };
    this.registeredUsers = {};
  }

  registerUser(username, password, age) {
    if (!this.registeredUsers[username] && age >= 18) {
      this.registeredUsers[username] = new User(username,password,age);
      console.log(`User ${username} registered`);
      return this.registeredUsers[username];
    } else if (this.registeredUsers[username]) {
      console.error("User already registered")
    } else {
      console.error("User too young to register");
    }
  }

  loginUser(username, password) {
    if (this.registeredUsers[username]) {
      if (this.registeredUsers[username].password === password) {
        this.registeredUsers[username].login(password);
        console.log(`User ${username} logged in`);
      } else {
        console.error("Incorrect password");
      }
    } else {
      console.error("Username or password incorrect")
    }
  }

}

module.exports = ScooterApp
