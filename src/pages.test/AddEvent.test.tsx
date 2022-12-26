import { cleanup, fireEvent, getByTestId, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import AddEvent from '@/components/AddEvent';
import EventModal from '@/components/Modal';
import GlobalContext from '@/context/GlobalContext';

const value = {
  setShowEventModal: jest.fn(),
}

describe ('Add Event Component', () => {

  test('should have add event button ', async () => {
    render(<AddEvent />);
    const Addbutton = screen.getByRole('button', { name: 'Add New Event' })
    expect(Addbutton).toBeInTheDocument()

  });

  test('should have modal in document onClick add new event', async () => { 
    user.setup()
    render(  
    <GlobalContext.Provider
      value={value}>
     <AddEvent />
    </GlobalContext.Provider> );
    const { container } = render(<EventModal />);
    const Addbutton = screen.getByRole('button', { name: 'Add New Event' })
    await user.click(Addbutton)
    const modalElement = getByTestId(container, "modal-element")
    expect(modalElement).toBeInTheDocument()

  })
})
    
  

