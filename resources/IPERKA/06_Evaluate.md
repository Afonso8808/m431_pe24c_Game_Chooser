Successes & Achievements:

    User Authentication: I successfully implemented a complete registration and login system with password security. Passwords are hashed with a combination of a unique salt per user and a constant pepper, making them secure against basic attacks.

    Game Recommendation System: The quiz effectively collects user preferences and, based on these, filters a hardcoded game database to recommend a game. The system even provides variability by selecting a random game when multiple entries match.

    User-Friendly Navigation: The site is designed to be intuitive for beginners. With clearly labeled forms and navigation buttons, even those with limited technical knowledge can register, log in, and receive some game recommendations :) .

    Learning Experience: I learned a great deal about modern web development, including practical aspects of using HTML, CSS, and JavaScript. Moreover, understanding and implementing cryptographic concepts (hashing, salting, peppering) was a significant accomplishment.

Challenges Overcome:

    Initial Issues with localStorage: Early in the project, I struggled with data consistency due to pages being accessed with file URLs (file://) instead of through a local server. Setting up a local Node.js server and using VSCode Live Server resolved this.

    Hashing Errors: There was an early issue where passwords were being stored in plain text. Through debugging (using console.log(), testing hash outputs and trough the help of my Lehrmeister), I identified and corrected the error, ensuring that the combined string (password + salt + PEPPER) was hashed and stored.

    Transition from Python Project: My earlier attempt to build a game launcher in Python was fraught with technical difficulties and integration issues with external APIs. This project, although simpler, was far more manageable and provided rapid, tangible results. It taught me how to scope a project realistically and choose the best technology stack for the task and i learnt that sometimes simpler projects is much better than complex projects.

Lessons Learned & Future Enhancements:

    Security Considerations:
    While localStorage is acceptable for a prototype, I learned that for a production environment, user credentials should be stored on a secure server with additional security measures (HTTPS, server-side hashing, database storage). I plan to further develop the project by moving the user data storage to a backend service.

    Scalability of the Game Database:
    Currently, the game database is hardcoded. In the future, I could integrate an external API or a database, so the system can recommend a broader range of games and update dynamically as new games release.

    UI/UX Improvements:
    Although the site is functional, the design is pretty basic with no images. I intend to refine the styling and user experience using responsive design techniques and modern CSS frameworks.

    Overall Growth:
    This project represents a substantial improvement over my previous work. Moving from the Python Game Launcher—which attempted to consolidate several game platforms but ultimately failed due to complexity and bugs—to this streamlined web solution has been a learning moment. I now have a project that not only meets my new requirements but also builds a strong foundation for further development. I am proud of the secure registration and login system I implemented, and I believe this project is an excellent example of practical problem-solving in web development.