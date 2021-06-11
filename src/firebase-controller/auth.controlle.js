import { auth } from './firebase';

/* Iniciar sesión con correo y contraseña */
const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

const signup = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export { signIn, signup };
