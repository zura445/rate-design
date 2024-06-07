import { useState } from 'react'

import './App.css'
import Rate from './components/rate/Rate'
import Result from './components/result/Result'

function App() {
  const [submit, setSubmit] = useState(false)
  const [rate, setRate] = useState(null)


  return (
    <>
    {submit ? <Result rate={rate} /> : <Rate setSubmit={setSubmit} rate={rate} setRate={setRate}/>}
    </>
  )
}

export default App
