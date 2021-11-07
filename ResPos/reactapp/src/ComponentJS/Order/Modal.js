import {FaDollarSign} from 'react-icons/fa'
import './App.css';
import './myCss/Modal.css'
import item1 from './images/Hamburger.jpg';
import item2 from './images/Chicken.jpg';
import {FaPlus, FaStar, FaMinus, FaStarHalf} from 'react-icons/fa'
import { useState } from 'react';
function App() {
    var dataList = [
        {
            'thumbnail': item1,
            'name': 'Samosa',
            'tag': 'something',
            'ingrediant': 'something',
            'price': '10000',
        }, {
            'thumbnail': item2,
            'name': 'Hamburger',
            'tag': 'something',
            'ingrediant': 'something',
            'price': '20000',
         },
         {
            'thumbnail': item1,
            'name': 'Samosa',
            'tag': 'something',
            'ingrediant': 'something',
            'price': '10000',
        }, {
            'thumbnail': item2,
            'name': 'Hamburger',
            'tag': 'something',
            'ingrediant': 'something',
            'price': '20000',
         }, 
         {
            'thumbnail': item1,
            'name': 'Samosa',
            'tag': 'something',
            'ingrediant': 'something',
            'price': '10000',
        }, {
            'thumbnail': item2,
            'name': 'Hamburger',
            'tag': 'something',
            'ingrediant': 'something',
            'price': '20000',
         }, 
    ]
  
    const [dishcur, setDishcur] = useState([])
    const [num, setNum] = useState(0)
    function plusNum() {
        setNum(num + 1);
    }
    function minusNum() {
        if (num > 0){
            setNum(num - 1);
        }
    }
    return (
        dataList.map((dish) => {
            function callmodal(){
                setDishcur(dish)
            }
            console.log(dishcur.title)
            return (
                <div className="Item">
                    <div className="Item-Body">
                        <div className="Item-Image" >
                            <img src= {dish.thumbnail} className="item-image" alt="Error" data-toggle = "modal" data-target = "#myModal" onClick={callmodal} />
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
                            {/* Modal */}
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
                                                        <div className="Change-Quantity">
                                                            <button style={{width:"40px"}} onClick = {minusNum}><FaMinus fontSize="20px"/></button>
                                                            <input  style={{height: "45px", width: "30%"}} value = {num}></input>
                                                            <button style={{width: "40px"}} onClick = {plusNum} ><FaPlus fontSize="20px"/></button>
                                                        </div>
                                                    </div>
                                                    <div className = "sideDish">
                                                        <h4 style = {{color: "#c0392b"}}>Side dish</h4>
                                                        <select className="form-select" aria-label="Default select example" id="Topping-Selection">
                                                            <option selected>None</option>
                                                            <option value="1">Side dish 1</option>
                                                            <option value="2">Side dish 2</option>
                                                            <option value="3">Side dish 3</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className = "DishProperties">
                                                    <div id = "properties">
                                                        <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Name: </label> {dishcur.name}</p>
                                                        <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Tag: </label> {dishcur.tag}</p>
                                                        <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Ingrediant: </label> {dishcur.ingrediant}</p>
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
                                                <button className = "orderButton" data-dismiss="modal">Place order</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal */}
                        </div>
                
                    </div>
                </div>
            )
            
        })
    );
}

export default App;