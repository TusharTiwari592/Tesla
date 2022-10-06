import React from 'react'





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
            <h1>{props.name}</h1>
            <p>{props.tagline}</p>
        </div>
        <div>
            <ul>
                <li><a href="">{props.button1}</a></li>
                {props.button2 && <li><a href="">{props.button2}</a></li>}
            </ul>
                <div id='img'>
                {props.arrow && <img src="down-arrow.svg" alt="" />}
                </div>
                    
        </div>
        
    </div>
  )
  }
export default Section
