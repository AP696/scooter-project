const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp');
const { useRef } = require('react');

describe("ScooterApp", () => {
    let scooterApp = new ScooterApp();
    describe("registerUser", () => {
        test("should register a user successfully", () => {
            const user = scooterApp.registerUser("test_username", "test_password", 21);
            expect(user.username).toEqual("test_username");
            expect(user.password).toEqual("test_password");
            expect(user.age).toEqual(21);
            expect(user.loggedIn).toEqual(false);
            expect(scooterApp.registeredUsers).toEqual({
                test_username: {
                    username: "test_username",
                    password: "test_password",
                    age: 21,
                    loggedIn: false
                }
            })
        });

        test("should not register a user if username is already taken", () => {
            scooterApp.registerUser("test_username", "test_password", 21);
            const user = scooterApp.registerUser("test_username", "test_password", 21);
            expect(user).toBeUndefined();
            expect(scooterApp.registeredUsers).toEqual({
                test_username: {
                    username: "test_username",
                    password: "test_password",
                    age: 21,
                    loggedIn: false
                }
            })
        })

        test("should not register a user if they are under 18 years old", () => {
            const scooterApp = new ScooterApp()
            const user = scooterApp.registerUser("test_username", "test_password", 17);
            expect(user).toBeUndefined();
            expect(Object.keys(scooterApp.registeredUsers)).toHaveLength(0)
        })
    })

    describe("loginUser", () => {
        test("should log in a registered user with correct name and password", () => {
            scooterApp.registerUser("test_username", "test_password", 21);
            scooterApp.loginUser("test_username", "test_password");
            expect(scooterApp.registeredUsers.test_username.loggedIn).toEqual(true);
        })

        test("should not log in a registered user with the incorrect password", () => {
            scooterApp.registerUser("test_username", "test_password", 21);
            const result = scooterApp.loginUser("test_username", "test_passwor");
            expect(result).toBe(false);
            expect(scooterApp.registeredUsers.test_username.loggedIn).toBe(false);
        });

        test("it should not log in an unregistered user", () => {
            scooterApp.loginUser('unregistered_username', "test_password");
            expect(scooterApp.registeredUsers['unregistered_username']).toBeUndefined();
        })
    })

    describe("logoutUser", () => {
        test('should log out a user', () => {
            scooterApp.registerUser('test_username', 'test-password', 21);
            scooterApp.loginUser('test_username', 'test-password');
            scooterApp.logoutUser("test_username");
            expect(scooterApp.registeredUsers.test_username.loggedIn).toBe(false);
        });

        test('should throw an error if user is not logged in', () => {
            scooterApp.registerUser('test_username', 'test_password', 21);
            scooterApp.loginUser('test_username', 'test_password');
            scooterApp.logoutUser("test_username");
            expect(() => {
                scooterApp.logoutUser('tes_username');
            }).toThrow(new Error('No such user is logged in'));
        })
    })

    describe('createScooter', () => {
        test('should create a scooter and add it to a station', () => {
            const scooter = scooterApp.createScooter('station1');
            expect(scooter).toBeInstanceOf(Scooter);
            expect(scooterApp.stations.station1).toContain(scooter);

        })
    })
})
 