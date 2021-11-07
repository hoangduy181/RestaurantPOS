import React from 'react';
import './myCss/Menu.css'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom"
import { FaInstagramSquare, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import item1 from './myImg/item1.png';
import item2 from './myImg/item2.png';
import item3 from './myImg/item3.png';
import item4 from './myImg/item4.png';
import item5 from './myImg/item5.png';
import item6 from './myImg/item6.png';
import item7 from './myImg/item7.png';
import item8 from './myImg/item8.png';
import item9 from './myImg/item9.png';
import item10 from './myImg/item10.png';
import item11 from './myImg/item11.png';
import item12  from './myImg/item12.png'
import {useState} from 'react';
import DishInMenu from './DishInMenu';
function Menu() {
    var dataList = [
        {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':1,
            'topping':["món 1", "món 2", "món 3"],
            'tag':'Morning'
        }, {
            'thumbnail': item2,
            'name': 'Hamberger',
            'price': '10000',
            'quantity':1,
            'id':2,
            'topping':'["món 1", "món 2", "món 3"]',
            'tag':'Noon'
         }, { 
            'thumbnail': item3,
            'name': 'Pasta',
            'price': '10000',
            'quantity':1,
            'id':3,
            'topping':'["món 1", "món 2", "món 3"]',
            'tag':'Afternoon'

        }, {
            'thumbnail': item4,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':1,
            'topping':'["món 1", "món 2", "món 3"]',
            'tag':'Night'
        }, {
            'thumbnail': item5,
            'name': 'Hamberger',
            'price': '10000',
            'quantity':1,
            'id':2,
            'topping':'["món 1", "món 2", "món 3"]',
            'tag':'Morning'

         },
         { 'thumbnail': item6,
         'name': 'Pasta',
         'price': '10000',
         'quantity':1,
         'id':3,
         'topping':'["món 1", "món 2", "món 3"]',
         'tag':'Noon'
        },
        {
            'thumbnail': item7,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':1,
            'topping':'["món 1", "món 2", "món 3"]',
            'tag':'Afternoon'
        }, {
            'thumbnail': item8,
            'name': 'Hamberger',
            'price': '10000',
            'quantity':1,
            'id':2,
            'topping':'["món 1", "món 2", "món 3"]',
            'tag':'Night'
         },
         { 'thumbnail': item9,
         'name': 'Pasta',
         'price': '10000',
         'quantity':1,
         'id':3,
         'topping':'["món 1", "món 2", "món 3"]',
         'tag':'Night'
        },
        {
            'thumbnail': item10,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':1,
            'topping':'["món 1", "món 2", "món 3"]',
            'tag':'Night'
        }, {
            'thumbnail': item11,
            'name': 'Hamberger',
            'price': '10000',
            'quantity':1,
            'id':2,
            'topping':'["món 1", "món 2", "món 3"]',
            'tag':'Night'
         },
         { 'thumbnail': item12,
         'name': 'Pasta',
         'price': '10000',
         'quantity':1,
         'id':3,
         'topping':'["món 1", "món 2", "món 3"]',
         'tag':'Night'
        }
    ]
    const [dishcur, setDishcur] = useState((prev)=>{
        prev= dataList
        return prev
    })
    const [searchDish,SetSearchDish] = useState(dataList)
    const [cart,SetCart] = useState(()=>{
        var Orderlist = []
        if(localStorage.getItem('CART')===null){
            Orderlist=localStorage.setItem('CART','[]')
        }
        else {
            Orderlist = JSON.parse(localStorage.getItem('CART'))
        }
        return Orderlist
    })

    function addCart(dish){
        SetCart(prev=>{
            const newCart = [...prev,dish]
            const jsonCart = JSON.stringify(newCart)
            localStorage.setItem('CART',jsonCart)
            return [...prev,dish]
        })
    }
    const handelFilter = (event)=>{
        const searchword = event.target.value
        const newFilter = dataList.filter((item)=>{
            return item.name.toLowerCase().includes(searchword.toLowerCase())
        });
        SetSearchDish(newFilter)
    }
  return (
    <div className="Menu">

        <div className="Header-Menu">

            <div className="Logo-Menu">
                <FaInstagramSquare fontSize="60px" color="#F9C846"/>
            </div>


            <div className="MENU">
            <Link to="/" style={{color:"white",textDecoration:"none"}}>THỰC ĐƠN </Link>
            </div>
        
            <svg height="100px" width="10px">
                <g fill="none">
                    <path id="lineAB" d="M 0 80 L 0 20" stroke="" strokeWidth="10" fill="none" />
                </g>
            </svg>


            <div className="VOUCHER">
                KHUYẾN MÃI
            </div>


            <svg height="100px" width="10px">
                <g fill="none">
                    <path id="lineAB" d="M 0 80 L 0 20" stroke="" strokeWidth="10" fill="none" />
                </g>
            </svg>


            <div className="STORE">
                CỬA HÀNG
            </div>

            <svg height="100px" width="10px">
                <g fill="none">
                    <path id="lineAB" d="M 0 80 L 0 20" stroke="" strokeWidth="10" fill="none" />
                </g>
            </svg>


            <div className="ABOUT">
                VỀ CHÚNG TÔI
            </div>

                {/* <svg height="100px" width="10px">
                    <g fill="none">
                        <path id="lineAB" d="M 0 80 L 0 20" stroke="" strokeWidth="10" fill="none" />
                    </g>
                </svg> */}


            <div className="User">
                <FaUser  fontSize="60px" color="#F9C846"/>
            </div>
           
            <div className="Cart-Menu">
            <Link to="/Cart">
                <FaShoppingCart fontSize="60px" color="#F9C846"/>
            </Link>
            </div> 
            <div className="Fillter">
                <input type="text" name="s" class="form-control" placeholder="Enter searching ..." style={{width:"45%",height:"40px"}} onChange={handelFilter}></input>
                <div style={{ width:"50px", paddingTop:"8px"}}><FaSearch size="30px" color="#F9C846"/></div>
            </div>
        </div>


        <div className="Body-Menu" id="showdish">

            {/* Hiển thị danh sách các món ăn */}
            {searchDish.map((dish) => {
                function callmodal(){
                    setDishcur(dish)
                }
                return <DishInMenu dish={dish} dishcur={dishcur} callmodal={callmodal} addCart={addCart}/>;
                })}
        </div>

    </div>
    
    );
};

export default Menu;
