import productsDB from "../../data/products";
import { initializeApp } from "firebase/app";
import { getFirestore,collection,addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFPD3H7xcfar4gYpyMKDne-GDatgRBQ2I",
    authDomain: "proyectoreactcz.firebaseapp.com",
    projectId: "proyectoreactcz",
    storageBucket: "proyectoreactcz.appspot.com",
    messagingSenderId: "731008796382",
    appId: "1:731008796382:web:78778e5950aeba356de44f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const db =getFirestore(firebaseApp);
console.log(db);


/*
Desde Firebase sobre products "borrar coleciion"
Crear una coleccion products  nueva con un campo test y un ID 
kuOP7X2njAYmmKCQkDiY
 */
export async function exportData() {
const productsCollectionRef = collection(db, "products");

for (let item of productsDB) {
    item.index = item.id;
    delete item.id;
    const res = await addDoc(productsCollectionRef, item);
    console.log("Documento creado:", res.id);
}
}