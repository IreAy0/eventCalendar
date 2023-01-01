import { cleanup, fireEvent, getByTestId, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import AddEvent from '@/components/AddEvent';
import CalendarNav from '@/components/CalendarNav';
import GlobalContext from '@/context/GlobalContext';
import Month from '@/components/Month';
import { getMonth } from '@/../Services/utils';

const value = {
  setShowEventModal: jest.fn(),
  savedEvents: []
}

describe (' Calendar Component', () => {

  test('should have add event button', async () => {
    render(<CalendarNav />);
    const CurrentMonth = screen.getByTestId("current-month")
    expect(CurrentMonth).toBeInTheDocument()
  });

  test('should have days', async () => {
      user.setup()
    render(  
    <GlobalContext.Provider
      value={value}>
     <Month month={getMonth()} />
    </GlobalContext.Provider> );
      const dayElement = screen.getAllByTestId("day-element")
      expect(dayElement).toHaveLength(dayElement.length)
  })
})
    