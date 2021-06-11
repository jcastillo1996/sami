import { db } from './firebase';

/* Crear Caso nuevo */
const addNewCase = async (newCase) => {
  await db.collection('Cases').add(newCase);
};

export default addNewCase;
