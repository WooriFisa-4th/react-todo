import TodoFilter from "./TodoFilter"
import { useState } from "react"
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import TodoForm from "./TodoForm";

const TodoHeader = ({onAdd, setFilter}) => {
  const [modal, setModal] = useState(false);

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
      <button 
        onClick={() => setModal(true)}
        className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
        data-cy="add-todo-button">Add Todo
      </button>
      <TodoFilter setFilter={setFilter}/>

      {modal && createPortal(
          <Modal>
            <TodoForm onAddOrUpdate={onAdd} onClose={() => setModal(false)}>
              할일 등록
            </TodoForm>
          </Modal>,
          document.body
      )}
    </div>

  )
}
export default TodoHeader

