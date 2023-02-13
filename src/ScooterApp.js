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
    if (!this.registeredUsers[username] && age > 18) {
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
    if (!this.registeredUsers[username]) {
        return false;
    }
    if (this.registeredUsers[username].password !== password) {
        return false;
    }
    if (this.registeredUsers[username].age < 18) {
        return false;
    } else {
      this.registeredUsers[username].loggedIn = true;

    }

    
}




  
    logoutUser(username) {
      if (!(username in this.registeredUsers)) {
        throw new Error("No such user is logged in");
      }
      this.registeredUsers[username].logout();
      console.log("User has been logged out");
    }
  
    createScooter(station) {
      if (!(station in this.stations)) {
        throw new Error("No such station");
      }
  
      const tempScooter = new Scooter(this.nextSerial++, station);
      this.stations[station].push(tempScooter);
      console.log("Created new scooter");
      return tempScooter;
    }
  
    dockScooter(scooter, station) {
      if (!(station in this.stations)) {
        throw new Error("No such station");
      }
  
      const stationScooters = this.stations[station];
      const scooterIndex = stationScooters.findIndex(
        (s) => s.serial === scooter.serial
      );
  
      if (scooterIndex === -1) {
        stationScooters.push(scooter);
        scooter.dock(station);
        console.log("Scooter is docked");
      } else {
        throw new Error("Scooter already at station");
      }
    }
  
    rentScooter(scooter, user) {
      let stationFound = false;
      let scooterIndex;
  
      for (const [station, stationScooters] of Object.entries(this.stations)) {
        scooterIndex = stationScooters.findIndex(
          (s) => s.serial === scooter.serial
        );
  
        if (scooterIndex !== -1) {
          stationFound = true;
          break;
        }
      }
  
      if (!stationFound) {
        throw new Error("Scooter is already rented");
      }
  
      const rentedScooter = this.stations[station].splice(scooterIndex, 1)[0];
      rentedScooter.rent(user);
      console.log("Scooter is rented");
    }
  
    print() {
      console.log("Registered users:");
      for (const [username, user] of Object.entries(this.registeredUsers)) {
        console.log(`- ${username}: ${user}`);
      }
  
      console.log("\nStations:");
      for (const [station, stationScooters] of Object.entries(this.stations)) {
        console.log(`- ${station}: ${stationScooters.length}`);
      }
    }
  }
  
  module.exports
  



module.exports = ScooterApp
