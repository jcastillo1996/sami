import { auth } from './firebase';

/* Iniciar sesión con correo y contraseña */
const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

export default signIn;
