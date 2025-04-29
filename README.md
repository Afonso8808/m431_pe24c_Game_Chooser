# m431_pe24c_Game_Chooser

Welcome to my assignment: a **Game Recommendation Website** built with **Node.js**, **HTML** and **JavaScript**.

---

## The Product

**Game-Chooser** is a small web application that helps gamers find new games specified to their preferences. It features:

- **Quiz Interface (`index.html`)**  
  Users select preferred genre, mode, era, setting, difficulty, visual style and length.

- **Registration (`users.html`)**  
  Create a new account—passwords are hashed with SHA-256, salted per user and peppered with a constant.

- **Login (`login.html`)**  
  Secure authentication: your entered password is hashed (with your salt + pepper) and compared against the stored hash.

- **Recommendations (`results.html`)**  
  Displays one main recommendation plus up to five extras, based on matching and scoring your preferences.

- **Backend (`daten.js`)**  
  A minimal Node.js server (using [`http-server`](https://www.npmjs.com/package/http-server) or similar) ensures all pages share the same origin, so that `localStorage` works correctly.

### Features

- **Secure Passwords**  
  - SHA-256 hashing  
  - Per-user random salt  
  - Global pepper constant  
  - Hashes stored (never plain text)

- **Customizable Quiz**  
  - Hard-coded array of 200+ games  
  - Prioritized attributes (genre, mode, visual) for filtering  
  - Full score ranking over all selected attributes

- **Beginner-Friendly**  
  - Intuitive, beginner-focused UI  
  - Clear navigation: register → login → quiz → results  
  - Runs entirely in the browser on Windows, macOS or Linux

---

## Watch the Demo

Open your browser to `http://localhost:8080/index.html` (after starting the server) and follow along:

1. Register a new user  
2. Log in with your credentials (only username and password  
3. Complete the quiz  
4. View your personalized game recommendations  

---

## Source Code

All source files live on GitHub:

- **Repo:** https://github.com/Afonso8808/m431_pe24c_Game_Chooser

---

## Download & Install
[`Download`](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/tree/main/resources/Download)

---

## Source_code
[`Source_code`](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/tree/main/Complette%20Website)

---
## IPERKA
[`01_Inform`](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/blob/main/resources/IPERKA/01_Inform.md)
[`02_Plan`](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/blob/main/resources/IPERKA/02_Plan.md)
[`03_Decide`](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/blob/main/resources/IPERKA/03_Decide.md)
[`04_Realize`](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/blob/main/resources/IPERKA/04_Realize.md)
[`05_Control`](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/blob/main/resources/IPERKA/05_Control.md)
[`06_Evaluate`](https://github.com/Afonso8808/m431_pe24c_Game_Chooser/blob/main/resources/IPERKA/06_Evaluate.md)

