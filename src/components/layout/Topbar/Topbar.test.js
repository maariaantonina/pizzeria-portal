import React from 'react';
import { shallow } from 'enzyme';
import Topbar from './Topbar';

it('renders without crashing', () => {
  shallow(<Topbar />);
});
