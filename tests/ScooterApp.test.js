const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp');
const { useRef } = require('react');


describe("ScooterApp", () => {
    let scooterApp = new ScooterApp();
    describe("registerUser", () => {
        test("should register a user successfully", () => {
            const user = scooterApp.registerUser("test-username", "test-password", 21);
            expect(user).toEqual({
                username: "test-username",
                password: "test-password",
                age: 21,
            })
            expect(scooterApp.registeredUsers).toEqual({
                test_username: {
                    username: "test-username",
                    password: "test-password",
                    age: 21,
                }
            })
        });

        test("should not register a user if username is already taken", () => {
            
        })

        test("should not register a user if they are under 18 years old", () => {
            const user = scooterApp.registerUser("test-username", "test-password", 17);
            expect(user).toBeUndefined();
            expect(scooterApp.user).toEqual({})
        })
    })
})