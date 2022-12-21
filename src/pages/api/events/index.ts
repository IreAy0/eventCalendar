
import { allEvents, createEvent } from "controller/controller";
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    // type of request
    const { method } = req

    switch(method){
        case 'POST' :
            createEvent(req, res)
            break;
        case 'GET' :
          allEvents(req, res)
          break;
        // case 'POST':
        //     postUser(req, res)
        //     break;
        // case 'PUT':
        //     putUser(req, res)
        //     break;
        // case 'DELETE':
        //     deleteUser(req, res)
        //     break;
        default : 
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            // res.status(405).end(`Method ${method} Not Allowd`)
            break;
    }
  }
  