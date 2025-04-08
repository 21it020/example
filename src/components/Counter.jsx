import React from 'react'

const Counter = () => {
    const [count, setCount] = React.useState(0)
    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={increment}>Increament</button>
        <button onClick={decrement}>Decreament</button>
    </div>
  )
}

export default Counter