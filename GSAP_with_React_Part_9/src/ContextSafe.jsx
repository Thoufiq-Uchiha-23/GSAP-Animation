import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";

const ContextSafe = () => {
  const boxRef = useRef();
  //ContextSafe is used to make our website use less memory, coz if we don't use
  //then it will take more memory
  const { contextSafe } = useGSAP();

  const rotateBox = contextSafe(() => {
    gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
    });
  });

  return (
    <main>
      <button onClick={rotateBox}>Animate</button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};

export default ContextSafe;
