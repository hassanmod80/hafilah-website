import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Firebase Config
// Vite environment variables are prefixed with VITE_
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || ""
};

// Check if we have valid configurations
const isFirebaseConfigured = !!(
  firebaseConfig.apiKey &&
  firebaseConfig.projectId &&
  firebaseConfig.appId
);

let app;
let db: any = null;

if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    db = getFirestore(app);
    console.log("Firebase initialized successfully.");
  } catch (error) {
    console.error("Firebase initialization failed:", error);
  }
} else {
  console.log("Firebase environment variables are missing. Operating in local storage mock mode.");
}

// Function to save booking to Firestore or LocalStorage fallback
export const saveBookingToDb = async (bookingData: {
  name: string;
  phone: string;
  date: string;
  busType: string;
  createdAt: string;
  notes?: string;
}) => {
  if (db) {
    try {
      const docRef = await addDoc(collection(db, "bookings"), bookingData);
      console.log("Booking saved to Firestore with ID:", docRef.id);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error adding booking to Firestore:", error);
      // Fallback to local storage on Firestore write error
      saveToLocalStorage(bookingData);
      return { success: true, fallback: true, error };
    }
  } else {
    saveToLocalStorage(bookingData);
    return { success: true, fallback: true };
  }
};

// Function to save contact message to Firestore or LocalStorage fallback
export const saveContactMessageToDb = async (messageData: {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}) => {
  if (db) {
    try {
      const docRef = await addDoc(collection(db, "contact_messages"), messageData);
      console.log("Contact message saved to Firestore with ID:", docRef.id);
      return { success: true, id: docRef.id };
    } catch (error) {
      console.error("Error adding contact message to Firestore:", error);
      saveContactToLocalStorage(messageData);
      return { success: true, fallback: true, error };
    }
  } else {
    saveContactToLocalStorage(messageData);
    return { success: true, fallback: true };
  }
};

// Local storage saving helpers
const saveToLocalStorage = (data: any) => {
  try {
    const existing = JSON.parse(localStorage.getItem("hafilah_bookings") || "[]");
    existing.push(data);
    localStorage.setItem("hafilah_bookings", JSON.stringify(existing));
    console.log("Booking saved to localStorage (Fallback):", data);
  } catch (e) {
    console.error("Failed to save to localStorage:", e);
  }
};

const saveContactToLocalStorage = (data: any) => {
  try {
    const existing = JSON.parse(localStorage.getItem("hafilah_contacts") || "[]");
    existing.push(data);
    localStorage.setItem("hafilah_contacts", JSON.stringify(existing));
    console.log("Contact message saved to localStorage (Fallback):", data);
  } catch (e) {
    console.error("Failed to save contact message to localStorage:", e);
  }
};

export { db };
