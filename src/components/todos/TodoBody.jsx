import TodoItem from './TodoItem'

const TodoBody = ({todos, onUpdate, onDelete, filter}) => {
    
    return (
    <ul className='px-0 my-8'>
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