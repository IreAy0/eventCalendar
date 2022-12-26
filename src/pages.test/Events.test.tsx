import { cleanup, fireEvent, getByTestId, render, screen } from '@testing-library/react';
import Events from '@/components/Events';


describe ('Show all Events', () => {
  const eventList  =  [
 
    {
        "title": "another new",
        "description": "new data description",
        "start": "2022-12-21",
        "end": "2022-12-24",
        "id": "e78745ea-10ac-4192-858d-4751a9b2918b"
    },
    {
        "title": "Hello world assignment",
        "end": "2022-12-28",
        "description": "Beginner training",
        "start": "2022-12-22",
        "id": "ee950aa0-73f7-4c53-a101-7d41951fb5fb"
    }
  ]
  test('should render all events ', async () => {
    render(
     <Events savedEvents={eventList}/>
    );
    const eventLists =  screen.getAllByRole('listitem')
    expect(eventLists).toHaveLength(eventLists.length)
    
  });

})
    
  

