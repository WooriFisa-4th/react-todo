import { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>You Clicked {count}</div>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  )
}

export default Counter
