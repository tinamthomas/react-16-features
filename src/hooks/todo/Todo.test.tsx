import React from 'react';

import Todo from './Todo';

describe('Todo', () => {
  let wrapper;

  const todoProps = {
    task: 'Laundry',
  };

  beforeEach(() => {
    wrapper = shallow(<Todo {...todoProps}/>);
  });

  it('should render task', () => {
    expect(wrapper.find('div').text()).toBe(todoProps.task);
  });
});

