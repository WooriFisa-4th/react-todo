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
      priority: '4',
      createdAt: '2021-09-01T00:00:00.000Z'
  },
  {
      id: 2,
      title: '점심 먹기',
      summary: '점심을 먹는다.',
      category: 'PROGRESS',
      priority: '4',
      createdAt: '2021-09-01T00:00:00.000Z'
  },
  {
      id: 3,
      title: '커피 마시기',
      summary: '커피를 마신다.',
      category: 'DONE',
      priority: '4',
      createdAt: '2021-09-01T00:00:00.000Z'
  }
]

function App() {
  const [data, setData] = useState(dummyData);
  const [filter, setFilter] = useState('all');

  const addTodoHandler = (id, title, summary, category, priority, createdAt) => {
    const addTodo = {
      id: id,
      title: title,
      summary: summary,
      category: category,
      priority: priority,
      createdAt: createdAt
    };
    /**
     * 최근 추가된 할 일 우선 표시: 사용자가 새로운 할 일을 추가하면, 그 할 일을 목록의 가장 위에 표시하는 기능 추가
     * setData([...data, addTodo]); -> setData([addTodo, ...data]);
    */ 
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
          <TodoBody todos={data} setData={setData} onUpdate={updateTodoHandler} onDelete={deleteTodoHandler} filter={filter}/>
        </section>

      </DefaultLayout>    
    </>
  )
}

export default App
