import { getDocs, doc, deleteDoc } from 'firebase/firestore';
import { db } from "../../services/firebase/firebaseConfig";


//Hice esta funcion para borrar todos los campos de la tabla Orders para limpiarla una vez y qu eno haya tantas pruebas
//La tengo que llamar desde app con un boton y despues borrarlo desde ahi
//

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
