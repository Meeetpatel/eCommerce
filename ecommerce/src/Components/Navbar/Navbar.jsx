import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import drop from "../Assets/dropdown_icon.png"

const Navbar = () => {

const [menu,setMenu]=useState("shop");
const {getTotalCartitems} = useContext(ShopContext);
const menuref = useRef();
const dropdown_toggle = (e)=>{
  menuref.current.classList.toggle('nav-menu-visible');
  e.target.classList.toggle("open");
}

  return (
    <div>
      <div className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt="logo"/>
          <p>Shopoholic</p>
        </div>
        <img className="nav-drop" onClick={dropdown_toggle} src={drop} alt=''></img>
        <ul ref={menuref}className='nav-menu'>
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none", color:"black"}} to="/Shopoholic">Shop </Link>{menu==="shop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:"none",color:"black"}} to="/men"> Men</Link>{menu==="men"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("women")}}><Link style={{textDecoration:"none",color:"black"}} to="/women">Women</Link>{menu==="women"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none",color:"black"}} to="/kids">Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Log Out</button>:<Link to="/login"><button>Login</button></Link> 
}
                  <Link to="/cart"> <img src={cart_icon} alt="logo"></img></Link>
          <div className='nav-cart-count'>{getTotalCartitems()}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
