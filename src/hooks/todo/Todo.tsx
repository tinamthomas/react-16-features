import React from 'react';

interface IToDoProps {
    task: string;
}
const ToDo = (props: IToDoProps) => {
  return <div>
      {props.task}
  </div>
};

export default ToDo;