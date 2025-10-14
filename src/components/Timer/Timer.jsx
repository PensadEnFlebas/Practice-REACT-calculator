import './Timer.css'

const Timer = ({ time }) => {
  return (
    <div>
      <div className='clock'>
        <img src='/clock_icon.png' alt='Clock' />
        <h2>Current Date</h2>
      </div>
      <p>{time}</p>
    </div>
  )
}

export default Timer
