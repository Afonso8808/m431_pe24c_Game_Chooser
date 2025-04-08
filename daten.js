/***********************************************************
 * Globale Einstellungen: Salting & Peppering
 ***********************************************************/
const PEPPER = "Jonas_isch_en_femboy"; 
// Achte darauf, dass dieser Pepper in der Registrierung 
// und im Login gleich ist. 

/***********************************************************
 * 1) Hilfsfunktionen für Salt & Hashing
 ***********************************************************/

// Generiert einen zufälligen Salt (16 Byte) als Hex-String
function generateSalt() {
  const array = new Uint8Array(16);
  window.crypto.getRandomValues(array);
  return Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('');
}

// SHA-256 Hash-Funktion mit der SubtleCrypto API
async function sha256(str) {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return bufferToHex(hashBuffer);
}

// Konvertiert einen ArrayBuffer in einen Hex-String
function bufferToHex(buffer) {
  const byteArray = new Uint8Array(buffer);
  return Array.from(byteArray).map(byte => byte.toString(16).padStart(2, '0')).join('');
}

/***********************************************************
 * 2) Registrierungs-Logik
 *    Erwartet ein Formular mit id="registrationForm"
 ***********************************************************/
async function handleRegistration(event) {
  event.preventDefault();
  
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  if (!usernameInput || !passwordInput) {
    alert("HTML-Elemente (username/password) nicht gefunden!");
    return;
  }
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  
  if (!username || !password) {
    alert('Bitte Benutzernamen und Passwort angeben');
    return;
  }

  // Hole bestehende Benutzer
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

  // Prüfen, ob der Benutzername bereits existiert
  if (existingUsers.some(u => u.username === username)) {
    alert('Benutzername bereits vergeben!');
    return;
  }

  // Salt generieren
  const salt = generateSalt();
  // Hash (Passwort + Salt + Pepper)
  const hashedPassword = await sha256(password + salt + PEPPER);

  // Neuen Benutzer anlegen
  const newUser = {
    username: username,
    salt: salt,
    password: hashedPassword
  };

  // Speichern
  existingUsers.push(newUser);
  localStorage.setItem('users', JSON.stringify(existingUsers));

  alert('Registrierung erfolgreich! Du kannst dich jetzt einloggen.');
  // Weiterleitung zur Login-Seite (Name anpassen, falls anders)
  window.location.href = 'login.html';
}

/***********************************************************
 * 3) Login-Logik
 *    Erwartet ein Formular mit id="loginForm"
 ***********************************************************/
async function handleLogin(event) {
  event.preventDefault();
  
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  if (!usernameInput || !passwordInput) {
    alert("HTML-Elemente (username/password) nicht gefunden!");
    return;
  }
  
  const username = usernameInput.value.trim();
  const password = passwordInput.value;
  
  if (!username || !password) {
    alert('Bitte Benutzernamen und Passwort angeben');
    return;
  }

  // Bestehende Benutzer laden
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  // Benutzer anhand des Namens suchen
  const user = existingUsers.find(u => u.username === username);
  
  if (!user) {
    alert('Benutzername oder Passwort ist falsch!');
    return;
  }

  // Hash mit demselben Salt + Pepper berechnen
  const computedHash = await sha256(password + user.salt + PEPPER);

  if (computedHash === user.password) {
    alert('Login erfolgreich!');
    // Weiterleitung zur Ergebnisseite
    window.location.href = 'results.html';
  } else {
    alert('Benutzername oder Passwort ist falsch!');
  }
}

/***********************************************************
 * 4) Event-Listener registrieren
 ***********************************************************/
document.addEventListener('DOMContentLoaded', () => {
  // Falls ein Registrierungs-Formular existiert
  const regForm = document.getElementById('registrationForm');
  if (regForm) {
    regForm.addEventListener('submit', handleRegistration);
  }

  // Falls ein Login-Formular existiert
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', handleLogin);
  }

  // Button zum Wechsel auf Registrierungsseite
  const goToRegistration = document.getElementById('goToRegistration');
  if (goToRegistration) {
    goToRegistration.addEventListener('click', function() {
      window.location.href = 'users.html';
    });
  }
});
