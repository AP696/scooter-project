class Scooter{
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial++;
    Scooter.nextSerial;
    this.charge = 100;
    this.isBroken = false
  }
  rent() {
    if (this.isBroken) {
      this.station = "Station"
      this.user = null;
      throw new Error("Scooter needs repair");
    }
    if (this.charge < 20) {
      this.station = "Station"
      this.user = null;
      throw new Error("Scooter needs charging");
    }
    this.station = null;
    this.user = "user";
    console.log("Scooter rented")
  }

  dock(station) {
    this.user = null;
    this.station = station;
    console.log("Scooter docked")
  }

  recharge() {
  return new Promise((resolve, reject) => {
    let intervalId = setInterval(() => {
      if (this.charge >= 100) {
        clearInterval(intervalId);
        resolve();
      } else {
        this.charge += 10;
        console.log(`Scooter charging: ${this.charge}%`);
      }
    }, 1000);
  });
}

  
  requestRepair() {
    setInterval(() => {
      console.log("Repair completed");
      clearInterval();
      this.isBroken = false;
    }, 5000);
  }
}






module.exports = Scooter

