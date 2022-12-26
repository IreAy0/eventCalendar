import { deleteEvent, getEvent, updateEvent } from "controller/controller";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { method } = req

    switch(method){
        case 'GET' :
            getEvent(req, res)
            break;
        case 'PUT':
            updateEvent(req, res)
            break;
        case 'DELETE':
            deleteEvent(req, res)
            break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
  