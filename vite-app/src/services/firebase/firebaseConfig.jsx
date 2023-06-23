import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs,getDoc,doc } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

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

//remplazo de funcion de ItemListContainer.jsx
export async function getData() {
  const productsCollectionRef = collection(db, "products");
  const productsSnapshot = await getDocs(productsCollectionRef);
  const arrayDocs = productsSnapshot.docs;

  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

/* ALTERNATIVA a lo de arriba para probar
 const dataDocs = arrayDocs.map((doc) => doc.data());  */

  return dataDocs;
}

//reemplazo de funcion de ItemDetailContainer.jsx
export async function getItemDataById(idUrl) {
  const docRef = doc(db, "products", idUrl);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
}

//Tambien falta la de filtrar por categoria
function getCategoryData ()
{

}