import TodoBody from './components/todos/TodoBody'
import TodoHeader from './components/todos/TodoHeader'
import DefaultLayout from './layouts/DefaultLayout'
import { useState } from 'react'

const dummyData = [
  {
      id: 1,
      title: 'React 공부',
      summary: 'React를 공부한다.',
      category: 'TODO',
  },
  {
      id: 2,
      title: '점심 먹기',
      summary: '점심을 먹는다.',
      category: 'PROGRESS',
  },
  {
      id: 3,
      title: '커피 마시기',
      summary: '커피를 마신다.',
      category: 'DONE',
  }
]

function App() {
  const [data, setData] = useState(dummyData);
  const [filter, setFilter] = useState('all');

  const addTodoHandler = (id, title, summary, category) => {
    const addTodo = {
      id: id,
      title: title,
      summary: summary,
      category: category
    };
    setData([...data, addTodo]);
  }

  const updateTodoHandler = (updateTodo) => setData(data.map(todoItem => todoItem.id === updateTodo.id ? updateTodo : todoItem));

  const deleteTodoHandler = (id) => setData(data.filter(todo => todo.id !== id));

  return (
    <>
    {/* // About children prop - 
        // 합성 vs 상속(https://ko.legacy.reactjs.org/docs/composition-vs-inheritance.html) */}
      <DefaultLayout>
        
        <header>
              <h1 className='pt-8 mx-auto text-red-200 max-w-max text-7xl'>
                <img className='ml-4' src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png" alt="Thought Balloon" width="75" height="75" />
                <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png" alt="Seal" width="75" height="75" />
                </h1>
        </header>

        <section className='max-w-xl m-4 mx-auto'>
          <TodoHeader onAdd={addTodoHandler} setFilter={setFilter}/>
          <TodoBody todos={data} onUpdate={updateTodoHandler} onDelete={deleteTodoHandler} filter={filter}/>
        </section>

      </DefaultLayout>    
    </>
  )
}

export default App
