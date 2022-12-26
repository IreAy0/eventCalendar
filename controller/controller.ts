import db from "../Services/firebase";
import { doc, getDoc,setDoc, updateDoc, deleteDoc } from "firebase/firestore";
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid';
import { collection, getDocs } from "firebase/firestore"; 

const events = collection(db, "events");

export async function getEvent(req: NextApiRequest, res: NextApiResponse){
  const { eventId } = req.query;
      const docRef = doc(db, 'events', `${eventId}`);
  try {
      
      const docSnap = await getDoc(docRef);

      if(docSnap.exists()){
          let data = docSnap.data()
          res.status(200).json(data);
      }

      res.status(404).json({ error : "Event not found"});

  } catch (error) {

      res.status(404).json({ error: "Event not found"})
  }
}

export async function createEvent(req: NextApiRequest, res: NextApiResponse){
  try {
    const formData = req.body;
    if(!formData) return res.status(404).json( { error: "Form Data Not Provided...!"});

   await setDoc(doc(db, "events", uuidv4()), formData);
    res.status(200).json({message: 'Success!'});

  }
  catch (error) {
      res.status(404).json({ error: "Event not found"})
  }
}

export async function allEvents(req: NextApiRequest, res: NextApiResponse){
  try {
    const querySnapshot = await getDocs(events);
    const document: any[] =[];
      querySnapshot.forEach((doc) => {
        document.push({
          ...doc.data(),
          id: doc.id
        });
      });
    res.status(200).json(document);
  } catch (error) {

    res.status(404).json({ error: "route not found"})
  }
} 

export async function updateEvent(req: NextApiRequest, res: NextApiResponse){
  try {
    const   id   = req.query;
    const formData =JSON.parse( req.body);
    const updateRef = doc(db, "events", `${id.id}`);
   const docRef = setDoc(updateRef, formData, { merge:true })
   res.status(200).json({message: 'Success!', data: docRef});

  

  } catch (error) {
    res.status(404).json({ error: "route not found"})
  }
}

export async function deleteEvent(req: NextApiRequest, res: NextApiResponse){
  try {
    const   id   = req.query;
    const deleteRef = doc(db, "events", `${id.id}`);

    
   const docRef = deleteDoc(deleteRef)
   res.status(200).json({message: 'Record deleted!', data: docRef});  

  } catch (error) {
    res.status(404).json({ error: "route not found"})
  }
}

