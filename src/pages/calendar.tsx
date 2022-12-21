// import { FullCalendarDraggable, Lucide } from '@/base-components';
import Events from '@/components/Events';
import EventModal from '@/components/Modal';
import Month from '@/components/Month';
import GlobalContext from '@/context/GlobalContext';
import { useContext, useEffect, useState } from 'react';
import { getEventsData } from 'Services/api';
import { getMonth } from 'Services/utils';

function Main() {
  const { setShowEventModal, showEventModal,  monthIndex,  dispatchCalEvent, savedEvents } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getEventsData();
        dispatchCalEvent({ type: "fetch", payload: result });
      } catch (error) {}
    };

    fetchData();
  }, [dispatchCalEvent]);

  console.log('showEventModal', showEventModal)
  return (
    <div className='content'>
       {showEventModal && <EventModal />}
      <div className="intro-y mt-8 flex flex-col items-center sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Event Calendar {showEventModal}</h2>
      </div>
      <div className="mt-5 grid grid-cols-12 gap-5">
        {/* BEGIN: Calendar Side Menu */}
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="box intro-y p-5">
            <button onClick={() => setShowEventModal(!showEventModal)} type="button" className="btn btn-primary mt-2 w-full">
              <div className="mr-2 h-4 w-4" /> Add New Event
            </button>
            <Events savedEvents={savedEvents}/>
          </div>
        </div>
        {/* END: Calendar Side Menu */}
        {/* BEGIN: Calendar Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          <div className="box p-5">
            <Month month={currentMonth}/>
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </div>
  );
}

export default Main;
