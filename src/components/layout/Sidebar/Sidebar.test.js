import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

const mockProps = {
  open: true,
  variant: 'persistent',
};

it('renders without crashing', () => {
  shallow(<Sidebar {...mockProps} />);
});
