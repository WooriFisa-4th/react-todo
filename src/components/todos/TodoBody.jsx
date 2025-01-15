import TodoItem from './TodoItem'

const TodoBody = ({todos, setData, filter}) => {
    
    return (
    <ul className='px-0 my-8'>
        {todos.map((todo) => 
            <TodoItem 
                key={todo.id} 
                todos={todos} 
                todo={todo} 
                setData={setData} 
                filter={filter}
            />
        )}
    </ul>
    )
}
export default TodoBody