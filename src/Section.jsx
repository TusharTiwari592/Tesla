import React from 'react'
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';

function Section(props) {
  const bg ={
      backgroundImage: `url(${props.backgroundImg})` ,
      backgroundPosition: "centre", 
      backgroundRepeat: "no-repeat", 
      backgroundSize: "cover"
  }
     
return (
    <div className='section' style={bg} >
      <div id='Heading'>
        <Slide left>
          <h1>{props.name}</h1>
        </Slide>
        <Slide right>
          <p>{props.tagline}</p>
        </Slide>
      </div>
      <div>
            <Fade bottom>
          <ul>
            
              <li><a href="">{props.button1}</a></li>
              {props.button2 && <li><a href="">{props.button2}</a></li>}
          </ul>
            </Fade>
              <div id='img'>
              {props.arrow && <img src="down-arrow.svg" alt="" />}
              </div>
                  
      </div>
      
  </div>
)
}

export default Section