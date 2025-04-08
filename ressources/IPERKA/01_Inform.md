

1. Informing (Informieren)

Project Inspiration and Context:

I often found myself struggling to decide on the next game to play even though I owned a large collection. This recurring problem sparked the idea of developing a website that could offer personalized game recommendations based on my mood and preferences.

The goal was to provide an interactive, user-friendly platform where users could select from various options—such as game genre, play mode, and difficulty level—to receive tailored game suggestions.

Furthermore, I aimed to include a secure login and registration system to allow users to create accounts and save their preferences.

Research on Security and Password Handling:

I started by researching the best practices in password security. I learned that storing passwords in plain text is extremely insecure.

My research led me to the concept of cryptographic hashing using algorithms like SHA-256. To further improve security, I delved into the importance of salting (adding a random, unique string to each password) and peppering (adding a secret constant value to further obfuscate the data) before hashing.

I experimented with the Web Crypto API in JavaScript to understand how to produce a SHA-256 hash. For example, I wrote and tested a simple snippet in Visual Studio Code:





async function sha256(password) {

const encoder = new TextEncoder();

const data = encoder.encode(password);

const hashBuffer = await crypto.subtle.digest('SHA-256', data);

const byteArray = new Uint8Array(hashBuffer);

return Array.from(byteArray).map(b => b.toString(16).padStart(2, '0')).join('');

}

const myPassword = "mypassword";

sha256(myPassword).then(hash => console.log("Test hash:", hash));






This confirmed that the Web Crypto API produced consistent, unique hash outputs and laid the groundwork for integrating secure password handling in my project.

Technology and Methodology Research:

I extensively reviewed resources on HTML, CSS, and JavaScript in order to build a responsive and visually appealing interface for my website.

In addition, I explored Node.js to create a local server. Running the application via a local server helped ensure that all parts of the site share a consistent origin, which is essential for localStorage to work properly.

I examined multiple tutorials and GitHub repositories (including those provided by my teacher) to learn best practices, and I also sought help from ChatGPT when I encountered obstacles.

Preliminary Thoughts on the Game Database:

As I began to collect game data, I opted to hardcode a simple game database as an array in my JavaScript files (e.g., in daten.js). This allowed me rapid prototyping without the need for a complex back-end database.

The focus was to implement a basic filtering mechanism that suggests a game based on the criteria chosen by the user via a quiz interface.

Challenges with LocalStorage:

Initially, I attempted to use localStorage exclusively for maintaining user data and quiz results. However, I encountered issues because when accessing files using file:// URLs, localStorage behaves inconsistently. This problem motivated me to run my application on a local Node.js server (or using tools like VSCode Live Server), ensuring all pages share the same origin.

Screenshot Placeholder:
