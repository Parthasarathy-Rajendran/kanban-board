import React from 'react';
import { useDrag } from 'react-dnd';

const TaskCard = ({ task }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { id: task.id },
  });

  return (
    <div ref={drag} style={{ border: '1px solid #ddd', padding: '10px', margin: '5px 0' }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskCard;
