import TodoFilter from "./TodoFilter"
import { useState } from "react"
import { createPortal } from "react-dom";
import Modal from "../ui/Modal";
import TodoForm from "./TodoForm";

const TodoHeader = ({todos, setData, setFilter}) => {
  const [modal, setModal] = useState(false);
  const modalHandler = () => {
    setModal(!modal);
  }

  return (
    <div className="flex items-center justify-between mb-2" id="task-control">
    <button className="px-6 py-2 font-semibold text-gray-100 bg-gray-800 border-none rounded cursor-pointer"
            data-cy="add-todo-button" onClick={modalHandler}>Add Todo
    </button>
    <TodoFilter setFilter={setFilter}/>
    {/* {modal && <TodoAddModal setModal={newTodo} setData={setData} todos={todos}/>} */}

    {modal && createPortal(
        <Modal>
            <TodoForm setModal={modalHandler} setData={setData} todos={todos}/>
        </Modal>,
        document.body
    )}

    </div>

  )
}
export default TodoHeader

