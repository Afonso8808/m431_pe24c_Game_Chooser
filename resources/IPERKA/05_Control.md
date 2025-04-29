# Control

## How I checked & controlled this assignment

### High-Level Steps
1. **Review the product requirements**
2. **Design test cases**
3. **Product testing**
4. **Code review**
5. **Review requirements and documentation**
6. **Test summary**

---

## Testing the Registration Process

- I opened the registration page (users.html) using a local server (via VSCode Live Server) to ensure that both pages share the same origin.
- I tested creating new user accounts with different usernames and verified that duplicate usernames were blocked.
- I inspected LocalStorage using the browser developer tools to confirm that user objects were stored correctly with their salt and hashed password (and not the plain-text password).
- Debugging output in the console (using `console.log()`) revealed the generated Salt and hash values, which I compared manually against expected results.

---

## Testing the Login Process

- On the login page (login.html), I attempted to log in using the credentials created during registration.
- The login function correctly retrieved the stored salt and computed a new hash using the entered password plus the stored salt and the constant pepper.
- I tested both correct and incorrect credentials to verify that the authentication logic worked as expected.
- I reviewed log outputs to ensure that the recomputed hash matched the stored hash, and when it did, the user was redirected to `results.html`.

---

## Testing the Quiz and Game Recommendation

- I tested the main quiz interface on `index.html` by selecting various combinations of game preferences.
- The JavaScript logic filtered through the hardcoded games array and stored the recommendation in localStorage.
- I confirmed that the recommendation was correctly retrieved and displayed on `results.html`.

---

## Navigation and Consistency

- I ensured that all pages are being served through the same local server (e.g., using VSCode Live Server), so that localStorage is shared consistently.
- Every page transition (from registration to login, login to results, etc.) was verified to work smoothly.

---

## Screenshots

I captured screenshots at various stages of the testing process:

1. **Registration Page**: A screenshot showing successful storage of user data.
   - ![Registration Screenshot][control01]

2. **Login Page**: A screenshot of the login page with the developer console open, verifying that the computed hash matches the stored hash.
   - ![Login Screenshot][control02]

3. **Results Page**: A screenshot of the results page displaying the game recommendation based on the quiz responses.
   - ![Results Screenshot][control03]

---

## Test Summary

### Test Protocol
- The tests were executed successfully with minor adjustments for error handling during login and registration.
- The main issue found was related to duplicate usernames during registration and hash mismatch during login, both of which were addressed.


---



[control01]: ../images/control-registration-screenshot.jpg
[control02]: ../images/control-login-screenshot.jpg
[control03]: ../images/control-results-screenshot.jpg
[protocol]: ../images/control-testprotocol-01.JPG


