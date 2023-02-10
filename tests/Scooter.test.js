const Scooter = require('../src/Scooter')
const User = require('../src/User')

//typeof scooter === object
describe('scooter instance integrity check', () => {
  const scooter = new Scooter("Liverpool");
  test('instance has correct properties', () => {
    // edit this to be a real test!
    expect(scooter).toHaveProperty("user", null);
    expect(scooter).toHaveProperty("charge");
    expect(scooter).toHaveProperty("serial");
    expect(typeof scooter.isBroken).toBe("boolean");
    expect(scooter.station).toBe("Liverpool")
  })
  test("instance static value incrementing", () => {
    const scooter2 = new Scooter("Wirral");
    expect(scooter2.serial).toBe(scooter.serial + 1);
  })
})

//Method tests
describe('scooter methods', () => {

  //rent method
  test('if scooter is rented', () => {
    const scooter1 = new Scooter('Manchester');
    scooter1.rent()
    expect(scooter.station).toBe(null)
  })
  test('check out to user', () => {
    
  })

  //dock method

  //requestRepair method

  //charge method

})
