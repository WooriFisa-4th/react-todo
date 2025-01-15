import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();
export const useTodoContext = () => { return useContext(TodoContext); };

const TodoDispatchContext = createContext();
export const useTodoDispatchContext = () => { return useContext(TodoDispatchContext); };

const dummyData = [
  {
    id: 1,
    title: 'React 공부',
    summary: 'React를 공부한다.',
    category: 'TODO',
    priority: '4',
    createdAt: '2021-09-01T00:00:00.000Z'
  },
  {
    id: 2,
    title: '점심 먹기',
    summary: '점심을 먹는다.',
    category: 'PROGRESS',
    priority: '4',
    createdAt: '2021-09-01T00:00:00.000Z'
  },
  {
    id: 3,
    title: '커피 마시기',
    summary: '커피를 마신다.',
    category: 'DONE',
    priority: '4',
    createdAt: '2021-09-01T00:00:00.000Z'
  }
]
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, todos: [...state.todos, action.newTodo] };
    case 'UPDATE':
      return {
        ...state,
        todos: state.todos.map(todoItem =>
          todoItem.id === action.updateTodo.id ? action.updateTodo : todoItem
        ),
      };
    case 'DELETE':
      return { ...state, todos: state.todos.filter(todoItem => todoItem.id !== action.id) };
    case 'DELETEALL':
      return { ...state, todos: [] };
    case 'FILTER':
      return { ...state, currentCategory: action.category };
    case 'SORTBYCREATEAT':
      return { ...state, todos: [...state.todos].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1)) };
    case 'SORTBYPRIORITY':
      return { ...state, todos: [...state.todos].sort((a, b) => a.priority - b.priority) };
    case 'SORTBYPRIORITYFLAG':
        return { ...state, sortByPriorityFlag: !state.sortByPriorityFlag };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { todos: dummyData, currentCategory: 'all', sortByPriorityFlag: false });
  return (
    <TodoContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};