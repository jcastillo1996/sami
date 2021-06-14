/* eslint-disable max-len */
import { auth } from './firebase';

/* Iniciar sesión con correo y contraseña */
export const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

/* Verificación de email */
export const verificationEmail = () => auth.currentUser.sendEmailVerification();

/* Usuario loggeado */
export const user = () => auth.currentUser;

/* Cerrar sesión */
export const signOut = () => auth.signOut();

// export default signIn;
