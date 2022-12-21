// import database, { auth } from "./firebase";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL_LOCAL


export const createNewEvent = async(formData: any) =>{
  try{
      const Options = {
          method : 'POST',
          headers : { 'Content-Type': "application/json"},
          body: JSON.stringify(formData)
      }
      
      const response = await fetch(`/api/events`, Options)
      const json = await response.json()

      return json;
  }catch(error){
      return error;
  }
}

export async function updateEventApi(formData: any){
  try{
      const Options = {
          method : 'PUT',
          headers:{
            Accept: 'application/json',
            
        },
          // headers : { 'Content-Type': "application/json, text/plain, */*"},
          body: JSON.stringify(formData)
      }
      const response = await fetch(`/api/events/${formData.id}`, Options)
      const json = await response.json()
      return json;
  }catch(error){
    console.log('error', error)
      return error;
  }
}

export async function deleteEventApi(formData: any){
  try{
      const Options = {
          method : 'DELETE',
          headers:{
            Accept: 'application/json',
            
        },
          // headers : { 'Content-Type': "application/json, text/plain, */*"},
          body: JSON.stringify(formData)
      }
      const response = await fetch(`/api/events/${formData.id}`, Options)
      const json = await response.json()
      return json;
  }catch(error){
    console.log('error', error)
      return error;
  }
}

export async function getEventsData() {
  try {
    const snapshot = await fetch(`/api/events`);
    const json = await snapshot.json()
    if (json) {
      return json;
    } else {
      console.log("No data available");
      return [];
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// export async 