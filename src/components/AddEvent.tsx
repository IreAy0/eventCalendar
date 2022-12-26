import GlobalContext from '@/context/GlobalContext';
import React, { useContext, useState } from 'react'

export default function AddEvent() {
  const { setShowEventModal, showEventModal,  monthIndex,  dispatchCalEvent, savedEvents } = useContext(GlobalContext);
  const [count, setCount] = useState<boolean>()
  return (
    <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
    <div className="box intro-y p-5">
    <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(!showEventModal)} type="button" className="btn btn-primary mt-2 w-full">
       Add New Event</button>
    </div>
  </div>
  )
}
