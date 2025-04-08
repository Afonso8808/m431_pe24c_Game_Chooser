2. Planning (Planen)

    Project Goals:

        Implement a secure user registration and login system that uses SHA-256 hashing with salt and pepper.

        Develop a game recommendation quiz that filters a hardcoded game database and suggests a game based on user preferences.

        Ensure the website is user-friendly so that even users unfamiliar with gaming or website navigation can use it with ease.

        Architect the application so that it runs on a local server using Node.js. This helps maintain the same origin across all pages, enabling consistent use of localStorage.

        The project should be structured into separate, clearly defined HTML pages:

            index.html: Hosts the game preference quiz.

            users.html: Registration page for creating a new account.

            login.html: Login page for existing users.

            results.html: Displays recommended game(s) after the quiz.

        Additionally, maintain a central JavaScript file (e.g., daten.js) that implements the game filtering logic and the registration/login operations.

    Technical Layout:

        Front-End:

            Build the HTML pages using semantic HTML.

            Enhance user experience with CSS styling (gradient backgrounds, neon accents, etc.) for an appealing visual theme.

            Implement interactive logic in JavaScript. I chose to design the logic modularly so that similar functions (like hashing and form submission) can be reused across pages.

        Back-End Considerations (Local Server):

            Although the primary functionality is client-side, I planned to run the application on a local Node.js server. This ensures consistent behavior of features like localStorage and facilitates easy testing and debugging.

            The Node.js server, while minimal in its operation, serves as a gateway, ensuring all files (HTML/CSS/JS) are loaded from the same origin.

    Data Handling Strategy:

        User data (username, salt, hashed password) will be stored in localStorage. For this project, localStorage is acceptable for demonstration purposes, even though it is not secure for production.

        The game database is hardcoded into the JavaScript code for quick development. For instance, all game objects are stored in an array in daten.js.

    User Authentication Details:

        Registration:

            When a user registers (on users.html), a random salt is generated.

            The password is then combined with this salt and a fixed pepper value, and hashed using SHA-256.

            The username, salt, and hashed password are stored in localStorage as a JSON object.

        Login:

            On login (login.html), the stored salt for the user is retrieved.

            The entered password is concatenated with the stored salt and the pepper, then hashed.

            The resulting hash is compared to the stored hash. If they match, the login is successful.

    Navigational Flow:

        After successful registration, the user is redirected to the login page.

        Once logged in, the user is taken to the results page where the quiz outcome or a personalized game suggestion is displayed.

        The login page also includes a button/link allowing users to navigate directly to the registration page if they do not yet have an account.

    Visual Prototyping Tools:

        I used Visual Studio Code for editing and debugging the code.

        For a consistent testing environment, I deployed the app using the VSCode Live Server extension and verified that both pages share the same origin (http://localhost:5500 or similar).

    Screenshot Placeholders: