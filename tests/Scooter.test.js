const Scooter = require('../src/Scooter')
const User = require('../src/User')

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
      expect(scooter1.user).toBe("User");
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
    });
  
    //dock method
  
    //requestRepair method
  
    //charge method
  
  })

});

//Method tests

