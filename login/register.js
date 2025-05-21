// Importa las funciones que necesitas de los SDK que necesitas
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
  apiKey: "AIzaSyBYtM89rBw5HW0QzgezXK6cOASNMKruEs4",
  authDomain: "cdeiae.firebaseapp.com",
  projectId: "cdeiae",
  storageBucket: "cdeiae.firebasestorage.app",
  messagingSenderId: "36971305009",
  appId: "1:36971305009:web:aacb882bec33c0d2239d10",
  measurementId: "G-PM77L8HYVT"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app); // Inicializa el servicio de Autenticación
 const analytics = getAnalytics(app);

 const registerForm = document.querySelector('form');
 const usernameInput = document.getElementById('username');
 const emailInput = document.getElementById('email');
 const passwordInput = document.getElementById('password');
 const confirmPasswordInput = document.getElementById('confirm_password');
 const passwordMatch = document.getElementById('password-match');
 const registerButton = document.querySelector('button[type="submit"]');

 confirmPasswordInput.addEventListener('input', () => {
  if (passwordInput.value !== confirmPasswordInput.value) {
   passwordMatch.textContent = 'Las contraseñas no coinciden.';
   registerButton.disabled = true;
  } else {
   passwordMatch.textContent = '';
   registerButton.disabled = false;
  }
 });

 registerForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita el envío predeterminado del formulario

  const email = emailInput.value;
  const password = passwordInput.value;

  createUserWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
    // Usuario registrado
    const user = userCredential.user;
    console.log('¡Registro exitoso!', user);
    // Aquí podrías redirigir al usuario o mostrar un mensaje de éxito
   })
   .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Registro fallido:', errorCode, errorMessage);
    // Aquí podrías mostrar un mensaje de error al usuario
   });
 });