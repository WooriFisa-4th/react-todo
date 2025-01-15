
import React, { useEffect, useState } from 'react'
import { TODO_CATEGORY_ICON } from '@/constants/icon'
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({onAddOrUpdate, onClose, children, todo}) => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [category, setCategory] = useState('TODO');
    const [isDisabled, setIsDisabled] = useState(false);
  
    const isNewTodoForm = () => children.endsWith('등록') ? true : false;

    const addOrUpdateHandler = () => {
        if(isNewTodoForm(children)) {
            const newIdx = uuidv4();
            onAddOrUpdate(newIdx, title, summary, category)
        } else {
            const updateTodoItem = {
                id: todo.id,
                title: title,
                summary: summary,
                category: category,
            }
            onAddOrUpdate(updateTodoItem);
        }
        onClose();
    }

    const addTodo = () => {
      const newIndex = uuidv4();
      const newTodoItem = {
          id: newIndex,
          title: title,
          summary: summary,
          category: category,
      };
      const newTodoList = [...todos, newTodoItem];
      setData(newTodoList);
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
            <h3 className="text-3xl text-red-200">{ children }</h3>
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
                        onClick={onClose} 
                        className='text-xl text-white' 
                        type='button'
                    >
                        Cancel
                    </button>
                    <button 
                        id="add" 
                        onClick={addOrUpdateHandler} 
                        disabled={isDisabled}
                        className={`p-2 rounded ${isDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 cursor-pointer'}`}
                        type='button'
                    >
                        {isNewTodoForm(children) ? 'Add' : 'Update'}
                    </button>
                </div>
            </form>
        </>
    )
};
export default TodoForm