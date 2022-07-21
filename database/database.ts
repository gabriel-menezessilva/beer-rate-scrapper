import { credential, ServiceAccount } from "firebase-admin";
import json from '../credentials.json';

export const firebaseConfig = {
    credential: credential.cert((json as ServiceAccount)),
    databaseURL: "https://beer-recommendation-7969b-default-rtdb.firebaseio.com"
};