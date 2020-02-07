import React from 'react';
import { shallow } from 'enzyme';
import Waiter from './Waiter';

describe('Component Waiter', () => {
  it('renders without crashing', () => {
    expect(shallow(<Waiter />)).toBeTruthy();
  });
});
