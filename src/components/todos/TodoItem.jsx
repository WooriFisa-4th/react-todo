import { createPortal } from 'react-dom';
import { useState } from 'react';

import TodoForm from './TodoForm';

import IconButton from '../ui/IconButton';
import Modal from '../ui/Modal';

import { TODO_CATEGORY_ICON } from '@/constants/icon';
import { PRIORITY_COLOR } from '@/constants/priority-color';

// eslint-disable-next-line react/prop-types
const TodoItem = ({todo, onUpdate , onDelete , filter}) => {
  console.log('TodoItem', todo);
  // eslint-disable-next-line react/prop-types
  const {id, title, summary, category, priority} = todo;
  const [modal, setModal] = useState(false);
  const isFiltered = filter !== 'all';

  if(isFiltered && (category !== filter)) return (<></>);

  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div className='w-full'>
            <span className="text-lg font-medium text-gray-300">{ TODO_CATEGORY_ICON[category] }</span>
            <div>
              <div className='flex justify-between'>
                <h2 data-test="title" className=" mb-0 text-lg font-bold text-gray-100 uppercase">{ title }</h2>
                <h2 data-test="title" className={` mb-0 text-lg font-bold ${PRIORITY_COLOR[priority]} uppercase`}>{ priority } 순위</h2>
              </div>
                <p className="mt-2 text-base text-gray-200">{ summary }</p>
            </div>
        </div>
        <div className="flex items-center gap-1">
            <IconButton onClick={() => setModal(true)} icon={'✏️'}/>
            
            {/* <IconButton  textColor='text-red-300' icon={'🗑'} /> */}
            <IconButton onClick={() => onDelete(id)} icon={'🗑'} />
        </div>
        {modal && createPortal(
          <Modal>
            <TodoForm onAddOrUpdate={onUpdate} onClose={() => setModal(false)} todo={todo}>
              할일 수정
            </TodoForm>
          </Modal>,
          document.body
        )}
    </li>
    
  )
}
export default TodoItem