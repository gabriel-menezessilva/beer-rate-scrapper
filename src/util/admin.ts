import { credential, initializeApp, firestore } from "firebase-admin";
import { firebaseAccess } from "../../credentials";

initializeApp({
    credential: credential.cert(firebaseAccess)
});

export const db = firestore();