import React from 'react';
import TaskCard from './TaskCard';
import { useDrop } from 'react-dnd';
import { useDispatch } from 'react-redux';
import { moveTask } from '../redux/actions/taskActions';

const Column = ({ stage, tasks }) => {
  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => {
      dispatch(moveTask(item.id, stage));
    },
  });

  return (
    <div ref={drop} style={{ width: '25%', padding: '10px', border: '1px solid #ddd' }}>
      <h2>{stage}</h2>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Column;
