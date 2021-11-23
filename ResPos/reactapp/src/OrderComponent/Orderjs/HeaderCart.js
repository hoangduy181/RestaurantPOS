import React from 'react'
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom"
import { FaBars, FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import '../Ordercss/HeaderCart.css';
import '../Ordercss/CartResponsive.css';
export default function HeaderCart() {
    function showMenu(){
        var menuBar = document.getElementById('HeaderCart');
        var isClose = menuBar.clientHeight === 50
        if(isClose){ 
            menuBar.style.height='auto'
        }
        else{
            menuBar.style.height='50px'
        }
    }
    return (
        <div  id = "HeaderCart">
        <div id="Fabars-icon" onClick={showMenu}><FaBars color="#FFFAE7" /></div>
        <ul id="nav">
                <li><FaHome/></li>
                <li><Link to="/" style={{color:"#FFFAE7",textDecoration:"none"}}>THỰC ĐƠN</Link></li>
                <li>KHUYẾN MÃI</li>
                <li>CỬA HÀNG</li>
                <li>VỀ CHÚNG TÔI</li>
                <li><FaUser/></li>
                <li><Link to="/Cart" style={{color:"#FFFAE7",textDecoration:"none"}}><FaShoppingCart/></Link></li>
        </ul>
    </div>
    )
}
