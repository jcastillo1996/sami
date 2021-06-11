import { db } from './firebase';

/* Crear Caso nuevo */
const user = async (userData) => {
  await db.collection('user').add(userData);
};

export default user;
