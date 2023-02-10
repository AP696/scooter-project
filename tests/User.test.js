const { describe } = require('node:test')
const User = require('../src/User')

describe('user instance integrity check', () => {
    test('instance has correct properties', () => {
        expect(user).toHaveProperty('username');
        expect(user).toHaveProperty('password');
        expect(user).toHaveProperty(age);
        expect(typeof user.loggedIn).toBe('boolean')
    })
})

// test username

// test password

// test age

// test login

// test logout
