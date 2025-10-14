import './App.css'
import Timer from './components/Timer/Timer'
import Calculator from './components/Calculator/Calculator'
import { useClock } from './customHooks/useClock'

const App = () => {
  const currentTime = useClock()

  return (
    <div style={{ fontFamily: 'sans-serif', marginTop: '2rem' }}>
      <Timer time={currentTime} />
      <Calculator />
    </div>
  )
}

export default App
