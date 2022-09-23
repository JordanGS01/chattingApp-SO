
import app from './firebaseApp'

import { getFirestore } from 'firebase/firestore'


const firestore = getFirestore(app);

export default firestore;