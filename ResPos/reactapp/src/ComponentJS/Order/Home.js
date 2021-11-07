import {FaDollarSign} from 'react-icons/fa';
import './MycssHome.css';
import './Mycss/Modal.css';
import item1 from './item1.png';
import item2 from './item2.png';
import {FaStar,FaMinus,FaPlus,FaStarHalf} from 'react-icons/fa';
import { useState } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
function Home() {
    var dataList = [
        {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':1,
            'topping':'["món 1", "món 2", "món 3"]'
        }, {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':2,
            'topping':'["món 1", "món 2", "món 3"]'
         },
         { 'thumbnail': item1,
         'name': 'Samosa',
         'price': '10000',
         'quantity':1,
         'id':3,
         'topping':'["món 1", "món 2", "món 3"]'
        }, {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':4,
            'topping':'["món 1", "món 2", "món 3"]'
         }, 
         {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':5,
            'topping':'["món 1", "món 2", "món 3"]'
        }, {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':6,
            'topping':'["món 1", "món 2", "món 3"]'
         }, 
         {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':7,
            'topping':'["món 1", "món 2", "món 3"]'
        }, {

            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':8,
            'topping':'["món 1", "món 2", "món 3"]'
         },
         {
             'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':9,
            'topping':'["món 1", "món 2", "món 3"]'
        }, {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':10,
            'topping':'["món 1", "món 2", "món 3"]'
         }, 
         {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':11,
            'topping':'["món 1", "món 2", "món 3"]'
        }, {
            'thumbnail': item1,
            'name': 'Samosa',
            'price': '10000',
            'quantity':1,
            'id':12,
            'topping':'["món 1", "món 2", "món 3"]'
         }
    ]
    const [cart,SetCart] = useState([])
    const [dishcur, setDishcur] = useState(dataList[0])
    const [num, setNum] = useState(0)
    function plusNum() {
        setNum(num + 1);
    };
    function minusNum() {
        if (num > 0){
            setNum(num - 1);
        }
    };
    return (
        dataList.map((dish) =>{
        function callmodal(){
            setDishcur(dish)
        }
        function addCart(){
                SetCart(prev=>{

                    const newCart = [...prev,dish]
                    const jsonCart = JSON.stringify(newCart)
                    localStorage.setItem('CART',jsonCart)
                    return [...prev,dish]
                })
                
         }
        return(
        <div className="Item">
            <div className="Item-Body">
                <div className="Item-Image" >
                <img src= {dish.thumbnail} className="item-image" alt="Error"  data-toggle = "modal" data-target = "#myModal" onClick={callmodal} />
                </div>
                <svg >
                    <g fill="none">
                        <path stroke="#A9493C" d="M 5 20 l290 0" strokeWidth="4"/>
                    </g>
                </svg>
            </div>
            <div className="Item-Footer">
                
                <div className="Name-Item">
                    {dish.title}
                </div>
                <div className="Item-Price">
                          <p><FaDollarSign/>{dish.price}</p>
                </div>
                <div className="Item-Cart">
                     <button className="Button-Order">Đặt món</button>
                     <div id = "myModal" className = "modal fade" role = "dialog">
                                    <div className = "modal-dialog modal-dialog-centered modal-lg">
                                        <div className = "modal-content" id = 'ModalContent'>
                                            <div className = "modal-header" id = "ModalHeader">
                                                <button id = "closeButton" type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className = "modal-body" id = "ModalBody">
                                                <div className = "DishImage">
                                                    <img src = {dishcur.thumbnail} className="dish-image" alt="Error"/>
                                                    <div className = "quantity">
                                                        <div style = {{height: "30px"}}>
                                                            <h4>Quantity</h4>
                                                        </div>
                                                        <div className="Change-Quantity-1">
                                                            <button style={{width:"40px"}} onClick = {minusNum}><FaMinus fontSize="20px"/></button>
                                                            <input  style={{height: "45px", width: "30%"}} value = {num}></input>
                                                            <button style={{width: "40px"}} onClick = {plusNum} ><FaPlus fontSize="20px"/></button>
                                                        </div>
                                                    </div>
                                                    <div className = "sideDish">
                                                        <h4 style = {{color: "#c0392b"}}>Side dish</h4>
                                                        <select className="form-select" aria-label="Default select example" id="Topping-Selection">
                                                            <option selected>None</option>
                                                            {/* <option value="1">Side dish 1</option>
                                                            <option value="2">Side dish 2</option>
                                                            <option value="3">Side dish 3</option> */}
                                                            
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className = "DishProperties">
                                                    <div id = "properties">
                                                        <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Name: </label> {dishcur.name}</p>
                                                        <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Tag: </label>Inazuma</p>
                                                        <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Ingrediant: </label> Liyue</p>
                                                        <div className = "rating">
                                                            <p>Rating:</p>
                                                            <div className = "ratingStar">
                                                                <span><FaStar/></span>
                                                                <span><FaStar/></span>
                                                                <span><FaStar/></span>
                                                                <span><FaStar/></span>
                                                                <span><FaStarHalf/></span>
                                                            </div>
                                                        </div>
                                                        <div className = "note">
                                                            <h5 style = {{color: "#c0392b"}}>Note</h5>
                                                            <div>
                                                                <textarea></textarea>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className = "modal-footer" id = "ModalFooter">
                                                <button className = "orderButton" data-dismiss="modal" onClick={addCart}>Place order</button>
                                            </div>
                                        </div>
                                    </div>
                </div>
                </div>
          
            </div>
        </div>
      )
    })
  );
}

export default Home;