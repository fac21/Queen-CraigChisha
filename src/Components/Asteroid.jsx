import React from 'react'
import faCLogo from '../Images/FaCLogo.png'

let score = 0

function Asteroid({setScore, name, image}) {    
    
// Falling Asteriods 
    const [distanceFromTop, setDistanceFromTop] = React.useState(-10)
    const [speed, setSpeed] = React.useState(Math.random()*5+5)
    const [distanceFromLeft, setDistanceFromLeft] = React.useState(Math.random()*100)

    React.useEffect(() => {
        const moveInterval = setInterval(() => {
            setDistanceFromTop(distanceFromTop => distanceFromTop + speed)
        }, 1000);
        return () => clearInterval(moveInterval)
    }, [speed]);

// Mouse Collision changes objects
    const mouseCollision = () => {
        setDistanceFromTop(() => -10);
        setDistanceFromLeft(() => Math.random()*100);
        setSpeed((speed) => speed+10);
        setScore((score) => score+1)
    }

//If user does not has avatar image use default FaC logo image  
if (!name) {
    return (
        <img src={faCLogo} alt='default Logo' onMouseEnter={mouseCollision} className="Asteroid" style={{transform: `translate(${distanceFromLeft}vw, ${distanceFromTop}vh)`}}/>
    )
  } else {
   return (

  <img src={image} alt='user Logo' onMouseEnter={mouseCollision} className="Asteroid" style={{transform: `translate(${distanceFromLeft}vw, ${distanceFromTop}vh)`}}/>
  )
  }
   
}


export { Asteroid, score }



