import React, { useState } from 'react'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css'
import CloseIcon from '@mui/icons-material/Close';
import Navbar from 'react-bootstrap/Navbar';
import Slide from 'react-reveal/Slide';
// import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

function Header() {
  let [value , getvalue] =useState(false)
  function  AsideMove(e){
    e.preventDefault();
    getvalue(true);
  }
  function close(){
    getvalue(false);
  }
  let tomove = (value) ? 0 : "-300px";
  return (
    <>
    <TeslaHeader className='Navbar d-flex justify-content-between'>
    <Slide top>
        <Logo src="logo.svg" />
        <Navigation className='d-flex'>
        <li><a href="">Model S</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model X</a></li>
        <li><a href="">Model Y</a></li>
        <li><a href="">Solar Roofs</a></li>
        <li><a href="">Solar Panals</a></li>
        </Navigation>
        <Login className='d-flex'>
            <li><a href="">Shop</a></li>
            <li><a href="">Account</a></li>
            <li><a href="" onClick={AsideMove}>Menu</a></li>
        </Login>
    </Slide> 
    </TeslaHeader>
    <Aside style={{right : tomove}}>
      <AsideList >
        <li><CloseIcon onClick ={close} /></li>
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
      </AsideList>
    </Aside>
    </>
  )
}

export default Header
let TeslaHeader = styled.div` 
  padding : 1rem 3rem;
  position: fixed;
  width : 100%;
  top : 0;
`
let Logo = styled.img``
let Navigation = styled.ul`
  list-style : none;
  li a{
    text-decoration : none;
    color : black;
    padding : 1rem

  }
`
let Login = styled(Navigation)`
`
let Aside = styled.div`
  width : 300px;
  height : 100vh;
  background : white;
  position : fixed;
  
`
let AsideList = styled(Navigation)`
  padding-top : 5rem;
li:first-of-type{
  position :absolute;
  right : 1.5rem;
  top:2rme;
}
li {
   padding : .7rem;
  
  }
`
