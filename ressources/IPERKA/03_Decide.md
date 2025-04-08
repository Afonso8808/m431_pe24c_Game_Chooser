3. Deciding (Entscheiden)

    Technology Selection:

        JavaScript & HTML/CSS: Chosen for the front-end to allow rapid prototyping and immediate feedback. This technology is well-known, widely documented, and offers an accessible platform for building an interactive web interface.

        Node.js: Selected to serve the web pages from a consistent origin. Running the app on a local Node.js server (or using a tool like VSCode Live Server) resolves localStorage inconsistencies and allows easier debugging and file management.

        LocalStorage: Despite its limitations regarding security, localStorage was deemed sufficient for this educational project. It provides a simple method to persist data (for example, user accounts) without needing to set up an external database.

        Web Crypto API: The built-in SubtleCrypto API was used for hashing. I opted for SHA-256 because it is widely supported and ensures secure password hashing when combined with salt and pepper.

    Key Design Considerations:

        I decided early on that the security of user passwords was a top priority. This led to extensive research on salting and peppering, and eventually to the incorporation of these techniques. In the final implementation, passwords are never stored in plain text.

        The user interface had to be simple and welcoming, even for users unfamiliar with gaming or technical details. Thus, I chose a modern design with clear instructions and intuitive navigation.

    Why Switch from the Python Project?

        Initially, I had attempted to develop a Python game launcher that would integrate games from various platforms (like Steam, Ubisoft Connect, and Epic Games). However, this project quickly became overwhelmed by integration issues, bugs, and a level of complexity that exceeded my current skill set.

        The challenges in the Python project included problems with multi-platform compatibility, the need for a complex GUI, and difficulties in handling multiple APIs simultaneously. With constant errors and an unmanageable codebase, I realized that the Python approach was unsustainable for now.

        Switching to a web-based solution using Node.js and client-side JavaScript was a more feasible path. It allowed me to see immediate results in the browser, and I could incrementally build and test each feature. This pivot not only enhanced my learning experience but also led to a product that is more user-friendly and maintainable.

    Decision Rationale Summary:

        Feasibility: The web app approach is easier to implement and debug using the tools I’m familiar with (VSCode, Live Server).

        User Experience: A browser-based solution is more accessible and attractive for users compared to a desktop Python application.

        Learning Outcome: I gained profound insights into modern web development, secure password handling, and the importance of iterative testing.

    Screenshot Placeholders: