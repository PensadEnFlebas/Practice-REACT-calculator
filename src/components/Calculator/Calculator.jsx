import './Calculator.css'
import { useRef } from 'react'

const Calculator = () => {
  const inputRef = useRef(null)
  const firstNumber = useRef(null)
  const operator = useRef(null)
  const results = useRef([])

  const handleOperation = (op) => {
    firstNumber.current = Number(inputRef.current.value)
    operator.current = op
    inputRef.current.value = ''
  }

  const handleEqual = () => {
    const secondNumber = Number(inputRef.current.value)
    let result = 0

    switch (operator.current) {
      case '+':
        result = firstNumber.current + secondNumber
        break
      case '-':
        result = firstNumber.current - secondNumber
        break
      case '*':
        result = firstNumber.current * secondNumber
        break
      case '/':
        result =
          secondNumber !== 0
            ? firstNumber.current / secondNumber
            : '😓 Error... Try again'
        break
      default:
        result = '😓 Error... Try again'
    }

    inputRef.current.value = ''

    if (typeof result === 'number') {
      results.current.push(result)
      results.current.sort((a, b) => a - b)
    }

    firstNumber.current = null
    operator.current = null

    document.getElementById('lastResult').textContent =
      typeof result === 'number' ? result : '😓 Error... Try again'
    document.getElementById('history').textContent = results.current.join(', ')
  }

  return (
    <div>
      <div className='calculator'>
        <img src='/favicon.png' alt='Calculator' />
        <h2>Calculator</h2>
      </div>
      <input ref={inputRef} type='number' placeholder='Introduce a number' />
      <div>
        <button onClick={() => handleOperation('+')}>+</button>
        <button onClick={() => handleOperation('-')}>-</button>
        <button onClick={() => handleOperation('*')}>x</button>
        <button onClick={() => handleOperation('/')}>/</button>
        <button onClick={handleEqual}>=</button>
      </div>

      <p>
        <strong>Last Result:</strong> <span id='lastResult'>❌</span>
      </p>
      <p>
        <strong>History:</strong> <span id='history'>❌</span>
      </p>
    </div>
  )
}

export default Calculator
