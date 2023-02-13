
const User = require('../src/User')

describe('user', () => {
    const user1 = new User("test-username", "test-password", 21)
    test('instance has correct properties', () => {
        expect(user1.username).toBe("test-username");
        expect(user1.password).toBe('test-password');
        expect(user1.age).toBe(21);
        expect(user1.loggedIn).toBe(false)
    })

    test("should login the user with correct password", () => {
        user1.login("test-password");
        expect(user1.loggedIn).toBe(true);
    });

    test("should not login user with the incorrect password", () => {
        user1.logout();
        user1.login("incorrect-password");
        expect(user1.loggedIn).toBe(false);
    });

    test("should logout the user", () => {
        user1.login("test-password");
        user1.logout();
        expect(user1.loggedIn).toBe(false);
    });
})

