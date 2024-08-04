import React from 'react';
import Column from './Column';
import NewTaskForm from './NewTaskForm';
import { useSelector, useDispatch } from 'react-redux'; // Import useDispatch
import { setFilter } from '../redux/actions/taskActions'; // Import setFilter action
  
const stages = ['To Do', 'In Progress', 'Peer Review', 'Done'];

const Board = () => {
  const dispatch = useDispatch(); // Use useDispatch to get dispatch function
  const tasks = useSelector((state) => state.tasks.tasks);
  const filter = useSelector((state) => state.tasks.filter);

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(filter.toLowerCase())
  );

  const handleSearchChange = (e) => {
    dispatch(setFilter(e.target.value)); // Dispatch setFilter action with input value
  };

  return (
    <div>
      <input type="text" placeholder="Search tasks" onChange={handleSearchChange} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {stages.map(stage => (
          <Column key={stage} stage={stage} tasks={filteredTasks.filter(task => task.stage === stage)} />
        ))}
      </div>
      <NewTaskForm />
    </div>
  );
};

export default Board;
