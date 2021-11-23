import React, { useState, useEffect } from 'react'
import { Row, Col, ListGroup, Image, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom"
import HeaderCart from './HeaderCart';
import ChangeQuantity from './ChangeQuantity';
import '../Ordercss/CartScreen.css'
export default function CartScreen() {  
    var [cartItems, SetcartItems] = useState(()=>{
        return JSON.parse(localStorage.getItem('Cart'))})
    const reload = ()=>{
        SetcartItems((prev)=>{
            localStorage.setItem('Cart',JSON.stringify(prev))
            return prev
        })
        TotalMoney(cartItems)
    }
    const [Total, SetTotal] = useState(()=>{
        var  t = 0
        var data = JSON.parse(localStorage.getItem('Cart'))
        data.map((item) => {
            t += item.price * item.quantity
            return t
        })
        return t
    })
    function TotalMoney(list){
        var res = 0
        list.map((item)=>{
            res += item.price * item.quantity
            return res
        })
        SetTotal(res)
    }
    function removeDish(item){
        var data = [] 
        cartItems.forEach(
            (element)=>{
                if(element !== item){
                    data.push(element)
                }
            }
        )
        localStorage.setItem('Cart',JSON.stringify(data))
        TotalMoney(data)
        SetcartItems(data)
    }
    return (
        <div className="cartScreen">
            <HeaderCart />
            <div className="yourCart"><h1>Giỏ hàng của bạn</h1></div>
            <div className="itemList">
                <Row>
                    <Col md={12}>
                        {cartItems.length === 0 ? (<h1>Quý khách chưa  đặt món </h1>) : (
                            <ListGroup variant='flush'>
                                {cartItems.map(item => (
                                    <ChangeQuantity item={item} reload ={reload} SetcartItems={SetcartItems} TotalMoney={TotalMoney} removeDish={removeDish}/>
                                ))}
                            </ListGroup>
                        )}
                    </Col>
                </Row>
            </div>
            <div className="totalMoney">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12} as='div' id="totalMoneyforPayment">
                            <Col as='h3' xs={7} sm={9} md={9} lg={9} xl={9}>
                                <label style={{color:'#A9493C'}}>TỔNG TIỀN:</label> ${Total}
                            </Col>
                            <Col as='div' id="paymentButton" xs={5} sm={3} md={3} lg={3} xl={3}>
                                {/* LINK tới trang thanh toán */}
                                <Link to="/"> <button>THANH TOÁN</button> </Link>
                            </Col>
                    </Col>
            </div>
        </div>
    )
}
