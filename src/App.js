import { useEffect, useState } from 'react';
import './App.css';
import { motion } from "framer-motion"

function App() {

  const [pointer,setPointer] = useState({x:0,y:0})
  const [cursorVariant,setCursorVariant] = useState("default")

  useEffect(()=>{
    const move = (e) =>{
      setPointer({
        x:e.clientX-16,
        y:e.clientY-16
      })
    }

    window.addEventListener('mousemove',move)
    return () =>{
      window.removeEventListener('mousemove',move)
    }
  },[])

  const variants = {
    default:{
      x:pointer.x,y:pointer.y
    },
    text:{
      height:150,
      width:150,
      x:pointer.x-75,
      y:pointer.y-75,
      backgroundColor:"#F2DD6E",
      mixBlendMode:"difference"
    }
  }

  const enter = () => setCursorVariant("text");
  
  const exit = () => setCursorVariant("default")
  


  return (
    <div className="App">
      <h1 className="header" onMouseEnter={enter} onMouseLeave={exit}>Hello World!</h1>
      <motion.div 
        className="cursor-pointer"
        variants={variants}
        animate={cursorVariant}
        
      />
    </div>
  );
}

export default App;
