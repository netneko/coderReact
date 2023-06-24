import { getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";




export async function deleteAllOrders() {
try {
    const ordersRef = db.collection("orders");
    const snapshot = await ordersRef.get();
    snapshot.forEach((doc) => {
    ordersRef.doc(doc.id).delete();
    });
    console.log("Todas las órdenes de compra han sido eliminadas.");
} catch (error) {
    console.error("Error al eliminar las órdenes de compra:", error);
}
}
