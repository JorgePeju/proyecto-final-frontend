import {initializeApp} from 'firebase/app'
import {firebaseConfig} from '../config/firebaseConfig'
import { getStorage } from "firebase/storage";
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)



