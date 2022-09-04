import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Section from './Section'
import './tesla.css'


ReactDOM.createRoot(document.getElementById('root')).render(
<>
  <Header />
  <Section 
  name = "Model S"
  tagline ="Order online for Touchless Delivery"
  button1 = "Custom Order"
  button2 = "Existing Delivery"
  backgroundImg ="model-s.jpg"
  arrow ={true}

  />
  <Section 
  name = "Model 3"
  tagline ="Order online for Touchless Delivery"
  button1 = "Custom Order"
  button2 = "Existing Delivery"
  backgroundImg ="model-3.jpg"
  
  />
  <Section 
  name = "Model X"
  tagline ="Order online for Touchless Delivery"
  button1 = "Custom Order"
  button2 = "Existing Delivery"
  backgroundImg ="model-x.jpg"
  />
  <Section 
  name = "Model Y"
  tagline ="Order online for Touchless Delivery"
  button1 = "Custom Order"
  button2 = "Existing Delivery"
  backgroundImg ="model-y.jpg"
  />
 <Section 
  name = "Solar Roofs"
  tagline ="Order online for Touchless Delivery"
  button1 = "Custom Order"
  button2 = "Existing Delivery"
  backgroundImg ="solar-roof.jpg"
  />
 <Section 
  name = "Solar Panals"
  tagline ="Order online for Touchless Delivery"
  button1 = "Custom Order"
  button2 = "Existing Delivery"
  backgroundImg ="solar-panel.jpg"
  />
  <Section 
  name = "Accessories"
  tagline ="Order online for Touchless Delivery"
  button1 = "Order Now"
  
  backgroundImg ="accessories.jpg"
  />
</>
)
