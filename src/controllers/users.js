import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase";



export async function createUser({formData}){
    try{
        const Userscollection = collection(db, "users");
        const data = {
            email: formData.email, 
            password: formData.password,  
            name: formData.name,  
            lastname: formData.lastname,
            user: formData.user,
            favoritegame: formData.favoritegame,
            membership: "",
        };
        await addDoc(Userscollection, data);
        console.log("Document written with ID: ", docRef.id);
        
    } catch (e) {
    console.error("Error adding document: ", e);
    console.log(formData.email);
    }
}





/*
    const data = {email, password, name, lastname, usuario, juego, membresias}
    await addDoc(Userscollection, {data});
    console.log(email, password, name, lastname, usuario, juego, membresias)
*/
