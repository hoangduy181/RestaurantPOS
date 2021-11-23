import React from "react";
import '../Ordercss/HeaderOrder.css';
import '../Ordercss/OrderResponsive.css';
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom"
import { FaBars, FaHome, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
export default function HeaderOrder({handleFilter}) {
    function showMenu(){
        var menuBar = document.getElementById('Header-OrderScreen');
        var isClose = menuBar.clientHeight === 50
        if(isClose){ 
            menuBar.style.height='auto'
        }
        else{
            menuBar.style.height='50px'
        }
    }
    return(
        <div  id = "Header-OrderScreen">
            <div id="Fabars-icon" onClick={showMenu}><FaBars color="#FFFAE7" /></div>
            <ul id="nav">
                     {/* Link tới trang chính*/}
                    <li><FaHome/></li>
                    <li><Link to="/" style={{color:"#FFFAE7",textDecoration:"none"}}>THỰC ĐƠN</Link></li>
                    <li>KHUYẾN MÃI</li>
                    <li>CỬA HÀNG</li>
                    <li>VỀ CHÚNG TÔI</li>
                    <li><FaUser/></li>
                    <li><Link to="/Cart" style={{color:"#FFFAE7",textDecoration:"none"}}><FaShoppingCart/></Link></li>
                    <li>
                        <input placeholder="Tìm kiếm....." onChange={handleFilter}/>
                        <i><FaSearch/></i>
                    </li>
            </ul>
        </div>
    )
};