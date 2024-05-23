import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {
  const container = useRef()

  useGSAP(() => {
    gsap.from(".box", {
      rotate: 360,
      scale: 0,
      duration: 1,
      opacity: 0,
      delay: 0.2
    })
  }, {scope: container})
  
  return (
    // using Scope property and useRef and useGSAP hook
    // <main>
    //   <div ref={container} className="container">
    //     <div className="circle"></div>
    //     <div className="box"></div>
    //   </div>
    //   <div className="kuch">
    //     <div className="circle"></div>
    //     <div className="box"></div>
    //   </div>
    // </main>
  )
}

export default App