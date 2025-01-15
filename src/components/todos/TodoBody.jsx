import { useState, useEffect, useContext } from 'react';
import { useTodoContext, useTodoDispatchContext } from '@/contexts/TodoContext';

import TodoItem from './TodoItem'

const TodoBody = () => {
    const {todos, sortByPriorityFlag} = useTodoContext();
    const dispatch = useTodoDispatchContext();
    useEffect(() => {
        if(sortByPriorityFlag) {
            dispatch({type: 'SORTBYPRIORITY'});
        } else {
            dispatch({type: 'SORTBYCREATEAT'});
        }
    }, [sortByPriorityFlag]);

    return (
        <ul className='px-0 my-8'>
            <div className='flex justify-between'>
                <button 
                    className={`w-1/4 p-2 border-[1px] border-gray-300 ${sortByPriorityFlag ? 'bg-gray-200' : 'bg-white'} rounded`} 
                    onClick={() => dispatch({type: 'SORTBYPRIORITYFLAG'})}>
                        우선순위로 정렬
                </button>
                <button 
                    className={`w-1/4 p-2 border-[3px] border-gray-300 bg-white text-red-600 rounded`} 
                    onClick={() => dispatch({type: 'DELETEALL'})}>
                        모두 지우기
                </button>
            </div>
            {todos.map((todo) => 
                <TodoItem 
                    key={todo.id} 
                    todo={todo} 
                />
            )}
        </ul>
    )
}
export default TodoBody