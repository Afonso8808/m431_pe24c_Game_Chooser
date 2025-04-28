Testing the Registration Process: (Pictures missing!)

    I opened the registration page (users.html) using a local server (via VSCode Live Server) to ensure that both pages share the same origin.

    I tested creating new user accounts with different usernames and verified that duplicate usernames were blocked.

    I inspected localStorage using browser developer tools to confirm that user objects were stored correctly with their salt and hashed password (and not the plain-text password).

    Debugging output in the console (using console.log()) revealed the generated salt and hash values, which I compared manually against expected results.

Testing the Login Process:

    On the login page (login.html), I attempted to log in using the credentials created during registration.

    The login function correctly retrieved the stored salt and computed a new hash using the entered password plus the stored salt and the constant pepper.

    I tested both correct and incorrect credentials to verify that the authentication logic worked as expected.

    I reviewed log outputs to ensure that the recomputed hash matched the stored hash, and when it did, the user was redirected to results.html.

Testing the Quiz and Game Recommendation:

    I tested the main quiz interface on index.html by selecting various combinations of game preferences.

    The JavaScript logic filtered through the hardcoded games array and stored the recommendation in localStorage.

    I confirmed that the recommendation was correctly retrieved and displayed on results.html.

Navigation and Consistency:

    I ensured that all pages are being served through the same local server (e.g., using VSCode Live Server), so that localStorage is shared consistently.

    Every page transition (registration to login, login to results, etc.) was verified to work smoothly.

Screenshots:
I captured screenshots at various stages of the testing process:

    A screenshot from the registration page showing successful storage of user data.

    A screenshot of the login page with the developer console open, verifying that the computed hash matches the stored hash.

    A screenshot of the results page displaying the game recommendation based on the quiz responses.