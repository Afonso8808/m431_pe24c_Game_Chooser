# How I made decisions for this assignment

## High Level Decisions
* Since I worked solo on this project, decision-making was quite straightforward. However, documenting decisions is crucial to ensure clarity and avoid unnecessary confusion later on.
* The key to my decision-making process was simplicity, functionality, and time constraints. I focused on making decisions that allowed me to quickly implement and test the core features of the website.

## Decision Log

### A.  Decision: Use Python as Programming Language
* **Reason** It's easier to open files through Python
* **Date:** 25.2.2025

### B.  Decision: Funktions of the program
* **Reason** so i know what i'll need
* **Date:**5.3.2025

### C.  Decision: Starting over
* **Reason** Code doesn't work and i can't programm in Python
* **Date:**8.4.2025

### 1. **Decision:** Use **Node.js** as the backend
   * **Reason:** I needed a lightweight backend solution that allowed me to quickly serve static pages and manage routing for user registration and login.
   * **Date:** 12.4.2025

### 2. **Decision:** Store user data temporarily in **localStorage**
   * **Reason:** LocalStorage was easy to implement for storing usernames and hashed passwords for this small-scale project. Later, I could integrate a full database solution if needed.
   * **Date:** 14.4.2025

### 3. **Decision:** Implement password **hashing** with **SHA-256**, **salted** and **peppered**
   * **Reason:** Security was a priority, and I needed to protect user passwords. Using SHA-256 with salt and pepper is a common practice to ensure passwords are not stored in plain text.
   * **Date:** 18.4.2025

### 4. **Decision:** Hardcode game data in the frontend (initially)
   * **Reason:** Since I had a limited amount of time to get the project running, I decided to hardcode a list of games in JavaScript. Later, I could consider adding dynamic data from a database.
   * **Date:** 21.4.2025

### 5. **Decision:** Start the documentation early & update it as I go along
   * **Reason:** It is easier to document as I work rather than leaving it until the end. This way, I can recall my thought process and decisions while the project is still fresh in my mind.
   * **Date:** 23.4.2025

### 6. **Decision:** Use **GitHub Projects** to track tasks and milestones
   * **Reason:** GitHub Projects provided an easy and centralized way to manage tasks, deadlines, and track progress.
   * **Date:** 24.4.2025

---

## Decision Matrix
One of the key decisions I had to make was whether to use a **full backend database solution** or rely on **localStorage** for this project. Given the simplicity of the project and the limited time available, I opted for localStorage.

The matrix below helped me visualize the decision-making process for using localStorage versus a full database solution:

| **Criteria**                | **localStorage** | **Database**  |
|-----------------------------|------------------|---------------|
| **Ease of Setup**            | Very Easy        | Complex       |
| **Scalability**              | Limited          | Highly Scalable|
| **Security**                 | Medium           | High          |
| **Time to Implement**        | Short            | Long          |
| **Performance**              | Fast for small datasets | Slower for large datasets |

Based on the matrix, I chose **localStorage** because it was quick to implement and good enough for this small-scale project.

---