import { ADD_TASK, MOVE_TASK, SET_FILTER } from '../actions/taskActions';

const initialState = {
  tasks: [],
  filter: '',
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case MOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId
            ? { ...task, stage: action.payload.newStage }
            : task
        ),
      };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default taskReducer;
