import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}>
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="navbar">
      
      </div>
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Hello there make an appointment</h1>
        <p className="mb-5">
        At Groomz, we believe in giving back.
We regularly support local charities and
events to spread beauty beyond our doors.
        </p>
        <button className="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
  )

}

export default App
