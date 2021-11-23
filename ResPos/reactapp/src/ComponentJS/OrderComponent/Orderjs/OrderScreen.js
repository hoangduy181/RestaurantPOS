import React from "react";
import HeaderOrder from "./HeaderOrder";
import BodyOrder from "./BodyOrder";
import FooterOrder from "./FooterOrder";
import '../Ordercss/OrderScreen.css';
import dishes from "./dishes";
import { useState } from "react";
export default function OrderScreen() {
    const [searchDish,SetSearchDish] = useState(dishes)
    function handleFilter (event){
    const searchword = event.target.value
    const newFilter = dishes.filter((item)=>{
        return item.name.toLowerCase().includes(searchword.toLowerCase())
    });
    SetSearchDish(newFilter)
    }
    if(localStorage.getItem('Cart')===null){
        localStorage.setItem('Cart','[]')
    }
    return(
        <div className = "OrderScreen">
            <HeaderOrder handleFilter={handleFilter}/>
            <BodyOrder searchDish={searchDish}/>
            <FooterOrder />
        </div>
    )
}