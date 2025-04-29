# Evaluate

## Successes & Achievements

- **User Authentication**: I successfully implemented a complete registration and login system with password security. Passwords are hashed with a combination of a unique salt per user and a constant pepper, making them secure against basic attacks.
  
- **Game Recommendation System**: The quiz effectively collects user preferences and, based on these, filters a hardcoded game database to recommend a game. The system even provides variability by selecting a random game when multiple entries match.

- **User-Friendly Navigation**: The site is designed to be intuitive for beginners. With clearly labeled forms and navigation buttons, even those with limited technical knowledge can register, log in, and receive some game recommendations.

- **Learning Experience**: I learned a great deal about modern web development, including practical aspects of using HTML, CSS, and JavaScript. Moreover, understanding and implementing cryptographic concepts (hashing, salting, peppering) was a significant accomplishment.

---

## Challenges Overcome

- **Initial Issues with localStorage**: Early in the project, I struggled with data consistency due to pages being accessed with file URLs (file://) instead of through a local server. Setting up a local Node.js server and using VSCode Live Server resolved this.

- **Hashing Errors**: There was an early issue where passwords were being stored in plain text. Through debugging (using `console.log()`, testing hash outputs, and with some guidance), I identified and corrected the error, ensuring that the combined string (password + salt + PEPPER) was hashed and stored.

- **Transition from Python Project**: I initially started with a more ambitious Python project where I intended to build a game launcher. The idea was to create a centralized platform that could handle games from different launchers such as Steam, Ubisoft Connect, and Epic Games. However, I ran into several technical difficulties such as integration issues with external APIs, complexity in managing different game data formats, and many unresolvable bugs. The Python game launcher was too complex to manage and lacked the scalability required to be viable. Because of this, I decided to abandon it and shift to a more manageable web-based project using Node.js. This shift has been an important learning experience for me, as it taught me the value of scoping projects realistically and choosing the right technology stack for the task at hand. While the Python project failed, it gave me the insight that simpler projects are often more effective and easier to scale.

---

## Lessons Learned & Future Enhancements

- **Security Considerations**: While localStorage is acceptable for a prototype, I learned that for a production environment, user credentials should be stored on a secure server with additional security measures (HTTPS, server-side hashing, database storage). I plan to further develop the project by moving the user data storage to a backend service.

- **Scalability of the Game Database**: Currently, the game database is hardcoded. In the future, I could integrate an external API or a database, so the system can recommend a broader range of games and update dynamically as new games release.

- **UI/UX Improvements**: Although the site is functional, the design is basic, and there are no images. I intend to refine the styling and user experience using responsive design techniques and modern CSS frameworks.

- **Overall Growth**: This project represents a substantial improvement over my previous work. Moving from the Python Game Launcher, which attempted to consolidate several game platforms but ultimately failed due to complexity and bugs, to this streamlined web solution has been a learning moment. I now have a project that not only meets my new requirements but also builds a strong foundation for further development. I am proud of the **secure registration and login system** I implemented, and I believe this project is an excellent example of practical problem-solving in web development.

---

## Assessment

### What Went Well

- **Naming Convention**: The assignment produced over 200 files. By defining and sticking to a naming convention, I was able to find and identify files quickly.
  
- **Task List**: The task list was very useful and guided me throughout the assignment, ensuring I completed all the necessary steps and didn’t miss any key functionality.

### What Could Be Improved

- **Touchpad**: The touchpad caused numerous errors while editing files. In future projects, I will use a normal keyboard to avoid this issue.
  
- **Code Review**: Even though the code worked, it would have been better if the code review was done earlier to catch any issues sooner.

### Were the Goals Achieved?

- **Wesbite**:  
  my Website works really good I haven't had any problem since I finished 

- **Hashing**:  
  The hashing works perfectly and I didn't have any problems with it

- **Refresh My Web Development Skills**:  
  This was definitely achieved. I now feel more comfortable working with HTML, CSS, and JavaScript and will continue to refine my skills. The project has also given me confidence in web development as a whole.

### Evaluate the Plan

- **Resource Plan**:  
  - From my resource plan, I had **40 hours** available for the project.  
  - My estimation for the task list was **30 hours**.  
  - My personal goal was to spend **20 hours** on the project.
  - I actually spent **49 hours** on the project.
  
- **Conclusion**:  
  I should have accounted for more buffer time in my estimates. Having used most of my available hours left little room for unforeseen issues. Luckily, my task estimation was generous, and I was able to complete the project within the time available.

---

## Future Considerations

- **Backend Development**: For future iterations, I aim to move the user data storage to a backend service to increase security and scalability. This will involve integrating a server-side database, implementing secure password hashing on the server, and deploying the application with HTTPS for secure connections.

- **Dynamic Game Recommendations**: I plan to explore the integration of an external API or dynamic database to pull a much larger dataset of games. This will make the game recommendations more comprehensive and adaptable as the game industry evolves.

- **Enhanced User Interface**: Future enhancements will include a more sophisticated UI design with better styling, including responsive design for mobile devices. This will enhance the user experience, particularly for beginners.

---

This project has been a great learning experience, and I am excited about the next steps for further improvement and scaling!
