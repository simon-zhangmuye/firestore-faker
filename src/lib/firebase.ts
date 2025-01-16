import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let app: any = null;
let db: any = null;

export function createFirebaseConfig(
  apiKey: string,
  authDomain: string,
  projectId: string,
) {
  return {
    apiKey,
    authDomain,
    projectId,
  };
}

export function initializeFirebase(config: {
  apiKey: string;
  authDomain: string;
  projectId: string;
}) {
  try {
    app = initializeApp(config);
    db = getFirestore(app);
    return { success: true };
  } catch (error) {
    return { 
      success: false, 
      error: {
        message: (error as Error).message
      }
    };
  }
}

export function getDb() {
  return db;
}