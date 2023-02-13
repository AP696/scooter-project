const Scooter = require('../src/Scooter')
const User = require('../src/User')

jest.setTimeout(10000) //Increases timeout to 30 seconds

describe('scooter class', () => {

  let station = "Station"
  const scooter1 = new Scooter(station);
  const scooter2 = new Scooter(station);

  test('instance has correct properties', () => {
    expect(scooter1).toHaveProperty("user", null);
    expect(scooter1).toHaveProperty("charge");
    expect(scooter1).toHaveProperty("serial");
    expect(typeof scooter1.isBroken).toBe("boolean");
    expect(scooter1.station).toBe(station)
  });
  test("serial number", () => {
    expect(scooter1.serial).toBe(1);
    expect(scooter2.serial).toBe(2);
  });

  describe("constructor", () => {
    test("should set the station", () => {
      expect(scooter1.station).toBe(station)
    });

    test("should set the user to null", () => {
      expect(scooter1.user).toBe(null);
    });

    test("should set the charge to 100", () => {
      expect(scooter1.charge).toBe(100);
    });

    test("should set isBroken to false", () => {
      expect(scooter1.isBroken).toBe(false);
    });
    
  });

  describe('scooter methods', () => {

    //rent method
    test("should rent scooter if charge is above 20 and not broken", () => {
      scooter1.rent()
      expect(scooter1.station).toBe(null);
      expect(scooter1.user).toBe("user");
    });

    test("should not rent scooter when charge is below 20", () => {
      scooter1.charge = 15;
      expect(() => {
        scooter1.rent();
      }).toThrow(new Error("Scooter needs charging"));
      expect(scooter1.station).toBe(station);
      expect(scooter1.user).toBe(null);
    });

    test("should not rent scooter if its broken", () => {
      scooter1.isBroken = true;
      expect(() => {
        scooter1.rent();
      }).toThrow(new Error("Scooter needs repair"));
      expect(scooter1.station).toBe(station);
      expect(scooter1.user).toBe(null);
      scooter1.isBroken = false;
    });
  
    //dock method
    describe("dock(station)", () => {
      test("makes user null", () => {
        scooter1.dock(station);
        expect(scooter1.user).toBe(null);
      })
      test("sets .station to station", () => {
        expect(scooter1.station).toBe(station);
      })
    })

    describe("Scooter.recharge", () => {
      test("should charge the scooter to 100%", done => {
        jest.setTimeout(30000);
        scooter1.charge = 50;
        scooter1.recharge().then(() => {
          expect(scooter1.charge).toEqual(100);
          done();
        });
      });
    
      test("should log a message for each 10% increment", done => {
        jest.setTimeout(30000);
        scooter1.charge = 50;
        const spy = jest.spyOn(console, "log");
        scooter1.recharge().then(() => {
          expect(spy).toHaveBeenCalledWith("Scooter charging: 60%");
          expect(spy).toHaveBeenCalledWith("Scooter charging: 70%");
          expect(spy).toHaveBeenCalledWith("Scooter charging: 80%");
          expect(spy).toHaveBeenCalledWith("Scooter charging: 90%");
          expect(spy).toHaveBeenCalledWith("Scooter charging: 100%");
          done();
        });
      });
    });
    let intervalId;
    //requestRepair method

    describe("requestRepair", () => {
      test("should set isBroken to false after 5 seconds", done => {
        jest.useFakeTimers();
        jest.setTimeout(30000);
        scooter1.isBroken = true;
        scooter1.requestRepair();
        jest.advanceTimersByTime(5000);
        expect(scooter1.isBroken).toBe(false);
        done();
      });
      
      
    })
  
    //charge method
  
  })

});

//Method tests

