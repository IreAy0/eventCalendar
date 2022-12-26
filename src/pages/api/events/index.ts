
import { allEvents, createEvent } from "controller/controller";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req

    switch(method){
        case 'POST' :
            createEvent(req, res)
            break;
        case 'GET' :
          allEvents(req, res)
          break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            break;
    }
  }
  