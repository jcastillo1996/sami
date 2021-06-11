import { db } from './firebase';

/* Crear Actuación */
const addNewActuation = async (newActuation) => {
  await db.collection('Actuations').add(newActuation);
};

export default addNewActuation;
