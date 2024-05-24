import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

// Used on Circle to animate based on Random values
// const App = () => {
//   // GSAP Utils
//   const container = useRef()
//   const [circle, setCircle] = useState(0)
//   // gsap.utils.random(starting pt, ending pt, range divisible by n)
//   const random = gsap.utils.random(-500, 500, 100)

//   useGSAP(() => {
//     gsap.to(".circle", {
//       x:circle,
//       duration:0.5,
//     })
//   }, [circle])

//   // useGSAP(() => {
//   //   gsap.from(".box", {
//   //     rotate: 360,
//   //     scale: 0,
//   //     duration: 1,
//   //     opacity: 0,
//   //     delay: 0.2
//   //   })
//   // }, {scope: container})
  
//   return (
//     <main>
//       {/* // using Scope property and useRef and useGSAP hook */}
//       {/* <div ref={container} className="container">
//         <div className="circle"></div>
//         <div className="box"></div>
//       </div>
//       <div className="kuch">
//         <div className="circle"></div>
//         <div className="box"></div>
//       </div> */}

//       <button onClick={() => {
//         setCircle(random)
//       }}>Animate</button>
//       <div className="circle"></div>
//     </main>
//   )
// }

// Used to Animate Box based on Random value
const App = () => {
  // const randomX = gsap.utils.random(-500, 500, 100)
  // const rotateX = gsap.utils.random(-360, 360, 30)
  // const [xValue, setXValue] = useState(0)
  // const [roti, setRoti] = useState(0)
  // const boxRef = useRef()

  // useGSAP(() => {
  //   gsap.to(boxRef.current, {
  //     x:xValue,
  //     duration:1,
  //     rotate: roti,
  //   })
  // }, [xValue, roti] )

  return (
    // <main>
    //   <button onClick={() => {
    //     setXValue(randomX)
    //     setRoti(rotateX)
    //   }}>Animate</button>
    //   <div className='box' ref={boxRef}></div>
    // </main>
  )
}

export default App