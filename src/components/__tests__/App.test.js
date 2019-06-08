import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../App';
import SideDrawer from '../SideDrawer';
import Toolbar from '../Toolbar';
import Home from '../Home';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

describe('<App />', () => {
  it('shows a SideDrawer component', () => {
    expect(wrapped.find(SideDrawer).length).toEqual(1);
  });

  it('shows a Toolbar component', () => {
    expect(wrapped.find(Toolbar).length).toEqual(1);
  });

  it('shows a Home component', () => {
    wrapped = mount(<App />);
    expect(wrapped.find(Home).length).toEqual(1);
  });
});
