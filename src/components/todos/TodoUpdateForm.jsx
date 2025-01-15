
import React, { useEffect, useState } from 'react'
import { TODO_CATEGORY_ICON } from '@/constants/icon'

const TodoUpdateForm = ({setModal, setData, todos, idx}) => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [category, setCategory] = useState('TODO');
    const [isDisabled, setIsDisabled] = useState(false);
  
    const updateTodo = () => {
        const updateTodoItem = {
            id: idx,
            title: title,
            summary: summary,
            category: category,
        };
        
        const updatedTodos = todos.map(todoItem => {
            return todoItem.id === idx ? updateTodoItem : todoItem;
        });
        setData(updatedTodos);
        setModal();
    }

    useEffect(() => {
        const block = document.getElementById('block-message');
        if(
            title === '' ||
            summary === '' ||
            category === ''
        ) {
            setIsDisabled(true);
            block.innerText = 'Please fill all the fields';
        } else {
            setIsDisabled(false);
            block.innerText = '';
        }
    }, [title, summary, category]);
      
    return (
        <>
            <h3 className="text-3xl text-red-200">할일 수정</h3>
            <form className='my-2'>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='title'>Title</label>
                    <input 
                        onChange={(e) => setTitle(e.target.value)} 
                        className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                        type='text' 
                        id='title' 
                    />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='summary'>Summary</label>
                    <textarea 
                        onChange={(e) => setSummary(e.target.value)} 
                        className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                        id='summary' 
                        rows='5' 
                    />
                </div>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='category'>Category</label>
                    <select 
                        onChange={(e) => setCategory(e.target.value)} 
                        className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                        id='category'
                    >
                        <option value='TODO'>{TODO_CATEGORY_ICON.TODO} To do</option>
                        <option value='PROGRESS'>{TODO_CATEGORY_ICON.PROGRESS} On progress</option>
                        <option value='DONE'>{TODO_CATEGORY_ICON.DONE} Done</option>
                    </select>
                </div>
                <p id='block-message' className='text-xl text-red-500 m-4'></p>
                <div className='flex justify-end gap-4'>
                    <button 
                        onClick={setModal} 
                        className='text-xl text-white' 
                        type='button'
                    >
                        Cancel
                    </button>
                    <button 
                        id="add" 
                        onClick={updateTodo} 
                        disabled={isDisabled}
                        className={`p-2 rounded ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 cursor-pointer'}`}
                        type='button'
                    >
                        Update
                    </button>
                </div>
            </form>
        </>
    )
};
export default TodoUpdateForm