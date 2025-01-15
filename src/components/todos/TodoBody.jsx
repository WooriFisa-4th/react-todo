import { useState, useEffect } from 'react';
import TodoItem from './TodoItem'

const TodoBody = ({todos, setData, onUpdate, onDelete, filter}) => {
    const [sortByPriorityFlag, setSortByPriorityFlag] = useState(false);

    useEffect(() => {
        if(sortByPriorityFlag) {
            // 우선순위로 정렬
            console.log('sortByPriorityFlag', sortByPriorityFlag);
            const sortedTodos = [...todos].sort((a, b) => a.priority - b.priority);
            setData(sortedTodos);
        } else {
            // 최신순 
            console.log('sortByPriorityFlag', sortByPriorityFlag);
            const sortedTodos = [...todos].sort((a, b) => a.createdAt > b.createdAt ? -1 : 1);
            setData(sortedTodos);
        }
    }, [sortByPriorityFlag]);

    return (
        <ul className='px-0 my-8'>
            <button 
                className={`w-1/4 p-2 border-[1px] border-gray-300 ${sortByPriorityFlag ? 'bg-gray-200' : 'bg-white'} rounded`} 
                onClick={() => setSortByPriorityFlag(!sortByPriorityFlag)}>
                    우선순위로 정렬
            </button>
            {todos.map((todo) => 
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                    onUpdate={onUpdate}
                    onDelete={onDelete} 
                    filter={filter}
                />
            )}
        </ul>
    )
}
export default TodoBody