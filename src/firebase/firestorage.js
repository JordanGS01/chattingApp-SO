
import app from './firebaseApp'

import { getFirestore } from 'firebase/firestore'


export const firestore = getFirestore(app);

