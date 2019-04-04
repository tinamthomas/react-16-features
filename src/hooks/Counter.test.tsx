import React from 'react';

import Counter from "./Counter";

describe('Counter', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Counter/>);
  });

  it('should render initial count', () => {
    expect(wrapper.find('#counter').text()).toBe('Current Count = 0');
  });

  it('should update count', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('#counter').text()).toBe('Current Count = 1');
  });
});

