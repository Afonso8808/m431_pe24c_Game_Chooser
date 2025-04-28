4. Realisieren

Development Environment & Workflow:

    IDE & Tools:

        I used Visual Studio Code as my primary development environment. Its integrated terminal and extensions (like Live Server) made it easy to test and debug my code.

        Node.js was set up on my machine to run a local server, ensuring that my application’s pages were served from the same origin. This was critical to avoid localStorage issues.

    Page-by-Page Development:
    Index Page (index.html)

        Purpose:
        The index page serves as the main landing page where users take a short quiz to indicate their game preferences (e.g., genre, setting, mode).

        Implementation:
        I wrote a form with multiple selection options (dropdowns or radio buttons) to capture the user’s inputs.
        Example snippet:

    <form id="quizForm">
      <h2>Find Your Next Game</h2>
      <label for="genre">Preferred Genre:</label>
      <select id="genre" name="genre">
        <option value="RPG">RPG</option>
        <option value="Shooter">Shooter</option>
        <option value="Racing">Racing</option>
        <!-- More options here -->
      </select>
      <!-- Additional fields for mode, setting, etc. -->
      <button type="submit">Get Recommendation</button>
    </form>
    <script src="daten.js"></script>

        The quiz data is processed by JavaScript code that filters a hardcoded games array (from daten.js) based on the selected criteria.

        Once the quiz is submitted, the selected preferences are stored in localStorage, and the user is redirected to results.html.

    Challenges:
    I needed to ensure the values were correctly captured and stored. Debugging with browser DevTools helped me verify that the user’s inputs were properly passed to the recommendation function.

Registration Page (users.html)

    Purpose:
    The registration page allows new users to create an account. The user enters a username and password, which are then securely processed.

    Implementation:
    I built a simple form with two inputs – one for the username and one for the password.
    Key elements include:

        Generating a random salt using a secure function.

        Combining the password with the salt and a fixed pepper value.

        Hashing the resulting string using SHA-256 via the Web Crypto API.

        Saving the new user’s data (username, salt, and hashed password) in localStorage.

    Code snippet:

    const PEPPER = "Jonas_isch_en_femboy";

    function generateSalt() {
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      return Array.from(array)
                  .map(b => b.toString(16).padStart(2, '0'))
                  .join('');
    }

    async function sha256(str) {
      const encoder = new TextEncoder();
      const data = encoder.encode(str);
      const hashBuffer = await crypto.subtle.digest('SHA-256', data);
      return bufferToHex(hashBuffer);
    }

    function bufferToHex(buffer) {
      const byteArray = new Uint8Array(buffer);
      return Array.from(byteArray)
        .map(byte => byte.toString(16).padStart(2, '0'))
        .join('');
    }

    document.getElementById("registrationForm").addEventListener("submit", async function(e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      if (existingUsers.some(u => u.username === username)) {
        alert("Username already exists!");
        return;
      }
      
      const salt = generateSalt();
      const hashedPassword = await sha256(password + salt + PEPPER);
      
      const newUser = {
        username: username,
        salt: salt,
        password: hashedPassword
      };
      
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      
      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    });

    Challenges:
    Initially, I found that the plain-text password was being stored, which forced me to re-check the order of operations, ensuring that the password was hashed with the salt and pepper before storage. Debug logs (using console.log()) were invaluable for verifying that the salt and hash were computed correctly.

Login Page (login.html)

    Purpose:
    This page allows users to log in using their registered credentials. The entered password is hashed (with the stored salt and known pepper) and compared against the stored hash.

    Implementation:
    The login form is similar to the registration form. When the form is submitted, JavaScript retrieves the user record from localStorage and recomputes the hash to verify the password.

    Code snippet:

    document.getElementById("loginForm").addEventListener("submit", async function(e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = existingUsers.find(u => u.username === username);
      if (!user) {
        alert("Incorrect username or password!");
        return;
      }
      
      const computedHash = await sha256(password + user.salt + PEPPER);
      if (computedHash === user.password) {
        alert("Login successful!");
        window.location.href = "results.html";
      } else {
        alert("Incorrect username or password!");
      }
    });

    document.getElementById("goToRegistration").addEventListener("click", function() {
      window.location.href = "users.html";
    });

    Challenges:
    I ran into issues where login always failed because, at first, I accidentally compared the plain-text password instead of the hashed password. Careful debugging revealed that I was missing the salt or pepper when recomputing the hash. Once corrected, the login process worked as expected.

Results Page (results.html)

    Purpose:
    After completing the quiz, the results page displays the recommended game. The recommendation is based on the user’s quiz inputs processed by a game filtering algorithm.

    Implementation:
    The page is simple, with placeholder elements that are populated via JavaScript on page load. The recommendation data is retrieved from localStorage (set by the quiz on the index page).

    Example snippet:

    const recommendedGame = JSON.parse(localStorage.getItem("recommendation"));

    if (recommendedGame) {
      document.getElementById("gameName").innerText = recommendedGame.name;
      document.getElementById("gameDetails").innerText = `${recommendedGame.genre}, ${recommendedGame.setting} – ${recommendedGame.mode}`;
    } else {
      document.getElementById("gameName").innerText = "No game found matching your preferences.";
    }

    Challenges:
    Ensuring that the recommendation was correctly stored before redirecting to the results page was critical. I had to verify that the quiz page saved the result in localStorage reliably and that results.html could access it.

Central JavaScript Logic (daten.js)

This file contains the core functions used throughout the project, including:

    Generating salts: A function to generate random salts.

    SHA-256 hashing: A function that uses the Web Crypto API.

    User registration and login logic: Handlers that process form submissions.

    Game recommendation logic for the quiz: Filtering and selecting a game based on user preferences.

A consolidated version of daten.js is shown below:

    const PEPPER = "Jonas_isch_en_femboy"; // constant pepper value


    function generateSalt() {
      const array = new Uint8Array(16);
      window.crypto.getRandomValues(array);
      return Array.from(array).map(b => b.toString(16).padStart(2, "0")).join("");
    }

    async function sha256(str) {
      const encoder = new TextEncoder();
      const data = encoder.encode(str);
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      return bufferToHex(hashBuffer);
    }

    function bufferToHex(buffer) {
      const byteArray = new Uint8Array(buffer);
      return Array.from(byteArray).map(byte => byte.toString(16).padStart(2, "0")).join("");
    }

    async function handleRegistration(e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
      }
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      if (existingUsers.some(u => u.username === username)) {
        alert("Username already exists!");
        return;
      }
      const salt = generateSalt();
      const hashedPassword = await sha256(password + salt + PEPPER);
      const newUser = {
        username: username,
        salt: salt,
        password: hashedPassword
      };
      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    }

    async function handleLogin(e) {
      e.preventDefault();
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value;
      if (!username || !password) {
        alert("Please fill in both username and password.");
        return;
      }
      const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = existingUsers.find(u => u.username === username);
      if (!user) {
        alert("Incorrect username or password!");
        return;
      }
      const computedHash = await sha256(password + user.salt + PEPPER);
      if (computedHash === user.password) {
        alert("Login successful!");
        window.location.href = "results.html";
      } else {
        alert("Incorrect username or password!");
      }
    }

    const games = [
      { name: "Elder Scrolls V: Skyrim", genre: "RPG", setting: "Fantasy", mode: "Singleplayer" },
      { name: "Halo Infinite", genre: "Shooter", setting: "Sci-Fi", mode: "Multiplayer" },
      { name: "Stardew Valley", genre: "Simulation", setting: "Fantasy", mode: "Singleplayer" }
    ];

    function recommendGame(prefs) {
      // Simple filtering based on preferences
      const matches = games.filter(game =>
        (prefs.genre ? game.genre === prefs.genre : true) &&
        (prefs.setting ? game.setting === prefs.setting : true) &&
        (prefs.mode ? game.mode === prefs.mode : true)
      );
      if (matches.length === 0) return null;
      return matches[Math.floor(Math.random() * matches.length)];
    }

    document.addEventListener("DOMContentLoaded", () => {
      const regForm = document.getElementById("registrationForm");
      if (regForm) {
        regForm.addEventListener("submit", handleRegistration);
      }

      const loginForm = document.getElementById("loginForm");
      if (loginForm) {
        loginForm.addEventListener("submit", handleLogin);
      }

      const quizForm = document.getElementById("quizForm");
      if (quizForm) {
        quizForm.addEventListener("submit", event => {
          event.preventDefault();
          const prefs = {
            genre: document.getElementById("genre").value,
            setting: document.getElementById("setting").value,
            mode: document.getElementById("mode").value
          };
          const recommendation = recommendGame(prefs);
          localStorage.setItem("recommendation", JSON.stringify(recommendation));
          window.location.href = "results.html";
        });
      }

      const goToRegistration = document.getElementById("goToRegistration");
      if (goToRegistration) {
        goToRegistration.addEventListener("click", () => {
          window.location.href = "users.html";
        });
      }
    });

Overall Implementation:
This daten.js file is central to the entire application. It consolidates all the core functions—from secure password hashing with salt and pepper to game recommendation filtering and form event handling. I ensured that the same hashing mechanism is used on both the registration and login pages so that the credentials are securely compared.