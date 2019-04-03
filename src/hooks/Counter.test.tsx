import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from "./Counter";

Enzyme.configure({ adapter: new Adapter() });

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

