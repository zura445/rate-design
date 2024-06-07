import './result.css'

export default function Result({rate}) {
  return (
    <div className='main-box'>
      <div className="img-box">
      <img src="./images/result.png" alt="" />
      </div>
      <p className='rate'>You selected {rate} out of 5</p>
      <h2>Thank you!</h2>
      <p className='thank'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>
  )
}
