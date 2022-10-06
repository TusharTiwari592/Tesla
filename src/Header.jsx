
import React , {useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Hidden } from '@mui/material';




function Header() {
  
  let [move , getvalue] = useState(false)
  let [color , setColor] = useState()
   
  function toshift(e){
    e.preventDefault();
    getvalue(true);
  }
  function hide(){
    getvalue(false)
  }
  let flow = (move) ? 0 : "-300px" ;
  addEventListener("scroll" , ()=>{
     
    let color = (scrollY >= 100) ? "white" : "transparent"
    setColor({backgroundColor : color})
  })
  
  return (
    <div id='navbar' style={color}>
      
        <div className='logo'>
        <img src="logo.svg" alt="" />
        </div>
        <ul>
        <li><a href="">Model S</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model X</a></li>
        <li><a href="">Model Y</a></li>
        <li><a href="">Solar Roofs</a></li>
        <li><a href="">Solar Panals</a></li>
        </ul>
        <ul >
            <li><a href="">Shop</a></li>
            <li><a href="">Account</a></li>
            <li><a href="" onClick={toshift}>Menu</a></li>
        </ul>
      
        <div id='aside' style={{right : flow}} >
                 <ul>       
                     <CloseIcon id="cross" onClick = {hide}/> 
                     <li><a href="">Model S</a></li>
                     <li><a href="">Model 3</a></li>
                     <li><a href="">Model X</a></li>
                     <li><a href="">Model Y</a></li>
                     <li><a href="">Solar Roof</a></li>
                     <li><a href="">Solar Panal</a></li>
                     <li><a href="">Existing Inventory</a></li>
                     <li><a href="">Used Inventory</a></li>
                     <li><a href="">Trade In</a></li>
                     <li><a href="">Test Drive</a></li>
                     <li><a href="">Powerwall</a></li>
                     <li><a href="">Commercial Energy</a></li>
                 </ul>
        </div>
    </div>
  )
}

export default Header
