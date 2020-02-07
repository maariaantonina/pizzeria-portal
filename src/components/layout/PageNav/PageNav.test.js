import React from 'react';
import { shallow } from 'enzyme';
import PageNav from './PageNav';

it('renders without crashing', () => {
  shallow(<PageNav />);
});
