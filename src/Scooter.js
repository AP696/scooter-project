class Scooter{
  static nextSerial = 1;
  constructor(station) {
    this.station = station;
    this.user = null;
    this.serial = Scooter.nextSerial;
    Scooter.nextSerial++;
    this.charge = 100;
    this.isBroken = false
  }
  rent() {
    if(this.charge > 20 && !this.isBroken) {
      this.station = null;
      this.user = "User";
      console.log("Scooter rented")
    } else if (this.charge <= 20) {
      console.log("Scooter needs to charge");
    } else if (this.isBroken === true) {
      console.log("scooter needs repair")
    }
  }
}


module.exports = Scooter
