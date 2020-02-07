import React from 'react';
import { shallow } from 'enzyme';
import NewOrder from './NewOrder';

it('renders without crashing', () => {
  shallow(<NewOrder />);
});
