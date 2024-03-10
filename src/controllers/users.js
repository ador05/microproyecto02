import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase";


export async function createUser({email, password, usuario, juego, membresias}){
    const Userscollection = collection(db, "users");
    const data = {email, password, usuario, juego, membresias}
    await addDoc(Userscollection, {data});
}

