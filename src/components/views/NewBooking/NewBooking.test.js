import React from 'react';
import { shallow } from 'enzyme';
import NewBooking from './NewBooking';

it('renders without crashing', () => {
  shallow(<NewBooking />);
});
