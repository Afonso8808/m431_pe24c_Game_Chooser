# Setup

## High Level Steps
1. **Create GitHub Directory Structure**
2. **Install Node.js**
3. **Naming Conventions**
4. **Testing Cases**
5. **Git Folder Sorting**

---

## Create GitHub Directory Structure
* **Created the repository on GitHub**
  * The first step was to create the repository directly on GitHub. I navigated to [GitHub](https://github.com) and created a new repository named `m431_pe24c_Game_Chooser`.

* **Added files directly through the GitHub website**
  * I created necessary files such as `index.html`, `main.js`, and `styles.css` directly on the GitHub website through the web interface.
  * For now, I kept the project simple and did not use a specific folder structure, so everything was initially stored at the root of the repository.

* **Committing changes**
  * After creating and editing the files, I committed and pushed the changes directly from GitHub’s web interface, ensuring all files were tracked and stored properly.

---

## Install Node.js
* **Download and install Node.js**
  * To enable JavaScript server-side programming, I installed Node.js. This allows the backend to run and handle requests like user authentication and game recommendations.
  * You can download the latest version of Node.js from [Node.js official website](https://nodejs.org/).
  * After downloading the Node.js installer, I followed the steps in the installer to complete the setup process.

* **Verify Installation**
  * After installation, I verified the installation of Node.js using the following commands:
    ```bash
    node -v
    npm -v
    ```

---

## Naming Conventions
* **Filenames**
  * All filenames are in **lowercase** (with some exceptions like IPERKA to maintain consistency and improve readability.
  * Spaces are represented by a Underscore (`_`).
  
* **Directories**
  * All directory names are in **lowercase**(Like i said with IPERKA being different) with spaces replaced by an underscore (`_`).
  
* **Variables**
  * All variables are in **uppercase** to clearly distinguish them as global constants.
  * Local variables are prefixed with `LOCAL`, while global variables are prefixed with `GLOBAL`.

* **Environment Variables**
  * All environment variable names are in **uppercase**, prefixed with `M431_`, and spaces are replaced by an underscore (`_`).

* **Database**
  * Table names are in **UPPERCASE** and prefixed with `T_`.
  * Column names are in **lowercase** to make them easy to identify and follow common conventions.

---

## Testing Cases
* **Test Cases Creation**
  * Test cases were created for both the registration and login processes, as well as for the game recommendation features. These test cases verify that the core features work as expected and meet the project requirements.
  * Each test case was linked to a specific requirement from the documentation, ensuring all functionalities were thoroughly tested.

* **Test Matrix**
  * A test matrix was created to track the progress of the test cases. The matrix included various scenarios to ensure that all edge cases were covered. For example, testing invalid login attempts, registration with existing usernames, and game recommendations based on preferences.

* **Automated Tests**
  * I explored options to automate tests with simple JavaScript functions for validating input, like username and password checks during registration.

---

## Git Folder Sorting
* **Organizing Files and Folders**
  * As I did not use folders for organizing my files, I kept all files at the root of the GitHub repository initially. This allowed me to focus on the functionality without worrying about folder structures. However, I considered that as the project grew, organizing files into directories could be helpful.

* **GitHub Commit Process**
  * After adding the files to the repository, I used GitHub’s built-in commit system to track the changes. I committed changes with descriptive messages to ensure version control was well-maintained.
    - For example: 
      ```bash
      git add .
      git commit -m "Set up initial files"
      git push origin main
      ```

---

## References for Setup
- [GitHub Repository](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/tree/main)
- [Node.js Official Website](https://nodejs.org/)

---

## Conclusion
The setup of the project involved creating files directly through GitHub’s web interface, which helped me quickly begin the development process. The main focus was on setting up Node.js, maintaining consistent naming conventions, and testing core features like registration, login, and game recommendations. While I did not initially organize the project into folders, I considered this step for future improvements as the project expands.
