class User {
  constructor(username, password, age) {
    this.username = username
    this.password = password;
    this.age = age;
    this.loggedIn = false;
  }

  login(password) {
    if(password === this.password) {
      this.loggedIn = true;
      User.currentUser = this;
      console.log("User logged in");
    } else {
      console.error("Incorrect password");
    }
  }

  logout() {
    this.loggedIn = false;
    User.currentUser = null;
    console.log("User logged out");
  }

}

module.exports = User
