
import app from './firebaseApp'

import { getStorage } from 'firebase/storage'


export const storage = getStorage(app);
