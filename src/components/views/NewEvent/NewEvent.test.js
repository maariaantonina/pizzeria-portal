import React from 'react';
import { shallow } from 'enzyme';
import NewEvent from './NewEvent';

it('renders without crashing', () => {
  shallow(<NewEvent />);
});
