import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  query,
  where,
  addDoc,
  orderBy,
  writeBatch,
} from "firebase/firestore";
import Swal from 'sweetalert2';

// Configuracion Firebase
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
  //Con esto voy a ordenar los productos por index
  const q = query(productsCollectionRef,orderBy("index"));
  const productsSnapshot = await getDocs(q);
  const arrayDocs = productsSnapshot.docs;

  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });
  return dataDocs;
}

//reemplazo de funcion de ItemDetailContainer.jsx
export async function getItemDataById(idUrl) {
  const docRef = doc(db, "products", idUrl);
  const docSnap = await getDoc(docRef);
  return { id: docSnap.id, ...docSnap.data() };
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    console.log("No such document!");
  }
  
}

//Tambien falta la de filtrar por categoria
export async function getCategoryData(idCategory) {
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", idCategory));
  const productsSnapshot = await getDocs(q);
  const arrayDocs = productsSnapshot.docs;
  const dataDocs = arrayDocs.map((doc) => {
    return { ...doc.data(), id: doc.id };
  });

  return dataDocs;
}


/*
export async function createOrder(data) {
  const ordersCollectionRef = collection(db, "orders");
  const response = await addDoc(ordersCollectionRef, data);
  console.log("orden creada!")
  return response.id;
}
*/


/*Esta funcion es para realizar la compra y que 
a) reste del stock
b) muestre un mensaje de error si no hay stock. 
 */

export async function createOrderWithStockUpdate(data) {
  const ordersCollectionRef = collection(db, "orders");
  const batch = writeBatch(db);
  const { items } = data;

  for (let itemInCart of items) {
    const refDoc = doc(db, "products", itemInCart.id);
    const docSnap = await getDoc(refDoc);

    const { stock } = docSnap.data();


    const stockToUpdate = stock - parseInt(itemInCart.quantity);

    if (stockToUpdate < 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `No hay stock suficiente del producto: ${itemInCart.title}`,
      });
    } 
    else {
      const docRef = doc(db, "products", itemInCart.id);
      batch.update(docRef, { stock: stockToUpdate });
    }
  }

  await batch.commit();
  const response = await addDoc(ordersCollectionRef, data);

  return response.id;
}