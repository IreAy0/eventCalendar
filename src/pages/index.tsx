// import { FullCalendarDraggable, Lucide } from '@/base-components';
import AddEvent from '@/components/AddEvent';
import CalenderNav from '@/components/CalendarNav';
import Events from '@/components/Events';
import EventModal from '@/components/Modal';
import Month from '@/components/Month';
import GlobalContext from '@/context/GlobalContext';
import { useContext, useEffect, useState } from 'react';
import { getEventsData } from '../../Services/api';
import { getMonth } from '../../Services/utils';

function Index() {
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

  return (
    <div className='content'>
       {showEventModal && <EventModal />}
      <div className="intro-y mt-8 flex flex-col items-center sm:flex-row">
        <h2 className="mr-auto text-lg font-medium">Event Calendar</h2>
      </div>
      <div className="mt-5 grid grid-cols-12 gap-5">
        {/* BEGIN: Calendar Side Menu */}
        <div className="col-span-12 xl:col-span-4 2xl:col-span-3">
          <div className="box intro-y p-5">
           <AddEvent />
            <Events savedEvents={savedEvents}/>
          </div>
        </div>
        {/* END: Calendar Side Menu */}
        {/* BEGIN: Calendar Content */}
        <div className="col-span-12 xl:col-span-8 2xl:col-span-9">
          
          <div className="box ">
          <CalenderNav />
            <Month month={currentMonth}/>
          </div>
        </div>
        {/* END: Calendar Content */}
      </div>
    </div>
  );
}

export default Index;
