// function Great() {
//   return (
//     <div>
//       <h1>Great</h1>
//     </div>
//   )
// }

// const Great = () => {
//     return (
//         <div>
//             <h1>Great with Aroow</h1>
//         </div>
//     )
// }

// export default Great
import React from 'react'
import Add from './Add'

const Great = () => {
  const name = "John"
  const date = new Date()
  
  return (
    <div>
      <h1>Great</h1>
      <p>My name is {name}</p>
      <p>Today is {date.toLocaleDateString()}</p>
     <Add/>
    </div>
  )
}

export default Great