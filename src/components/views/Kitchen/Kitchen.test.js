import React from 'react';
import { shallow } from 'enzyme';
import Kitchen from './Kitchen';

it('renders without crashing', () => {
  shallow(<Kitchen />);
});
