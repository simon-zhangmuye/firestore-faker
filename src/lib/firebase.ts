/// <reference types="vite/client" />

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let app: any = null;
let db: any = null;

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET
};

export function initializeFirebase() {
  if (!app) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  }
  return app;
}

export function getDb() {
  if (!db) {
    initializeFirebase();
  }
  return db;
}