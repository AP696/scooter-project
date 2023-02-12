
const User = require('../src/User')

describe('user instance integrity check', () => {
    test('instance has correct properties', () => {
        const user1 = new User("test-username", "test-password", 21)
        expect(user1.username).toBe("test-username");
        expect(user1.password).toBe('test-password');
        expect(user1.age).toBe(21);
        expect(user1.loggedIn).toBe(false)
    })
})

// test username

// test password

// test age

// test login

// test logout
