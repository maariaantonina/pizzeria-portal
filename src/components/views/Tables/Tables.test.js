import React from 'react';
import { shallow } from 'enzyme';
import Tables from './Tables';

describe('Component Tables', () => {
  it('renders without crashing', () => {
    expect(shallow(<Tables />)).toBeTruthy();
  });
});
