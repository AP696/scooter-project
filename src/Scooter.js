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
    this.user = "User";
    console.log("Scooter rented")
}
}


module.exports = Scooter
