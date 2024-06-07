import './rate.css'

export default function Rate({setSubmit, rate, setRate}) {
    let buttons = [1, 2, 3, 4, 5]
  return (
    <div className='main'>
        <div className="logo-box">
            <img src="./images/Star.png" alt="" />
        </div>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <div className="button-container">
        {buttons.map((button) => (
          <button className='klick' onClick={() => setRate(button)} key={button} style={rate === button ? {backgroundColor: "#7c8798"} : {}}>
            {button}
          </button>
        ))}
        </div>  
        <button onClick={() => {rate && setSubmit(true)}}>SUBMIT</button>
    </div>
  )
}
