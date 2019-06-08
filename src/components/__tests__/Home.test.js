import React from 'react';
import { mount } from 'enzyme';

import Home from '../Home';

let wrapped;

beforeEach(() => {
  wrapped = mount(<Home />);
});

describe('<App />', () => {
  it('creates one Form', () => {
    expect(wrapped.find('form').length).toEqual(1);
  });

  it('shows the text in home page', () => {
    expect(wrapped.render().text()).toContain(
      'The best free stock photos shared by talented creators.'
    );
  });
});
