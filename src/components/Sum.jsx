import React, { useState } from 'react'

function Sum() {
    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [sum, setSum] = useState(0)
  return (
    <div>
      <input type="text" onChange={(e) => setNum1(parseInt(e.target.value))} />
      <input type="text" onChange={(e) => setNum2(parseInt(e.target.value))} />
      <button onClick={() => setSum(num1 + num2)}>Find Sum</button>
      <h1>Sum is: {sum}</h1>
    </div>
  )
}

export default Sum
