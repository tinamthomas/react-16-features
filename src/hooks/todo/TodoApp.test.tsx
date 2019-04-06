import React from 'react';
import TodoApp from "./TodoApp";

describe('Todo App', () => {
    let wrapper;

    const todoList = [{task: 'Laundry'}, {task: 'Car Insurance'}];

    beforeEach(() => {
       wrapper = shallow(<TodoApp todos={todoList}/>);
    });

    it('should render todos list', () => {
        const toDos = wrapper.find('li');
        expect(toDos.length).toBe(2);
        expect(toDos.at(0).text()).toBe(todoList[0].task);
        expect(toDos.at(1).text()).toBe(todoList[1].task);
    });

    it('should render a input box and track changes', () => {
        wrapper.find('input').simulate('change', {target: {value:'Grocery'}});
        expect(wrapper.find('input').props().value).toBe('Grocery');
    });

    it('should add new value to list', () => {
        wrapper.find('input').simulate('change', {target: {value:'Grocery'}});
        wrapper.find('button').simulate('click');

        const toDos = wrapper.find('li');

        expect(toDos.length).toBe(3);
        expect(toDos.at(0).text()).toBe(todoList[0].task);
        expect(toDos.at(1).text()).toBe(todoList[1].task);
        expect(toDos.at(2).text()).toBe('Grocery');
    });
});