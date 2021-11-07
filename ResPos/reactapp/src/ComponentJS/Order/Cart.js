import './myCss/Cart.css'
import {FaReply} from 'react-icons/fa'
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom"
import RenderOrder from './RenderOrder';
import {useState} from 'react'
function  Cart(){
    const [total,SetTotal] = useState(()=>{
        var t = 0
        const noworder = JSON.parse(localStorage.getItem('CART'))
        if(noworder!==[]){
            noworder.map((dish)=>{
               t += dish.price * dish.quantity
               return t
            })
        }
        return t
    })
    function updateTotal(){
        var t = 0
        const noworder = JSON.parse(localStorage.getItem('CART'))
        if(noworder!==[]){
            noworder.map((dish)=>{
               t += dish.price * dish.quantity
               return t
            })
        }
        SetTotal(t)
    }
    return (
        <div className="Cart-Contents" >
            <div className="Cart" >
            <div className="Header-Cart">
                <div className="headerCart-Icon">
                <Link to="/"><div ><FaReply size="50px" color="#F9C846"/></div></Link>
                    <div fontWidth="30px" textColor="#FBE09A">
                   <div >Menu</div>
                    </div>
                </div>
            </div>
            <div className="Body-Cart">
                <div className="Table-Header">
                    <div className="Thumbnail">
                   
                    </div>
                    <svg height="90px" width="10px">
                            <g fill="none">
                                <path id="lineAB" d="M 0 80 L 0 10" stroke="" stroke-width="5" fill="none" />
                            </g>
                    </svg>
                    <div className="Title">
                       <h2 style={{lineHeight:"100px"}}>Thông tin</h2>
                    </div>
                    <svg height="90px" width="10px">
                            <g fill="none">
                                <path id="lineAB" d="M 0 80 L 0 10" stroke="" stroke-width="5" fill="none" />
                            </g>
                    </svg>
                    <div className="Price">
                       <h2 style={{lineHeight:"100px"}}>Giá</h2>
                    </div>
                    <svg height="90px" width="10px">
                            <g fill="none">
                                <path id="lineAB" d="M 0 80 L 0 10" stroke="" stroke-width="5" fill="none" />
                            </g>
                    </svg>
                    <div className="Quantity">
                       <h2 style={{lineHeight:"100px"}}>Số lượng</h2>
                    </div>
                    <svg height="90px" width="10px">
                            <g fill="none">
                                <path id="lineAB" d="M 0 80 L 0 10" stroke="" stroke-width="5" fill="none" />
                            </g>
                    </svg>
                    <div className="Total">
                        <h2 style={{lineHeight:"100px"}}>Tổng</h2>
                    </div>
                    <svg height="10px" width="1600px"  >
                            <g fill="none">
                                <path id="lineAB" d="M 20 5 L 1580 5" stroke="" stroke-width="5" fill="none" />
                            </g>
                    </svg>
                </div>
                <div className="Table-Body">
                  <RenderOrder updateTotal ={updateTotal}/>
                </div>
            </div>
            <div className="Footer-Cart">
                <svg height="10px" width="1600px" >
                    <g fill="none">
                        <path id="lineAB" d="M 20 8 L 1580 8" stroke="" stroke-width="4" fill="none" />
                    </g>
                </svg>
                <div className="Cart-Payment">
                   
                   <div className="Button-Payment-1">
                       <h2>TỔNG:</h2>
                   </div>
                   <div className="Button-Payment-2">
                       <h2>{total}</h2>
                   </div>
                   <div className="Button-Payment-3">
                       <h2>THANH TOÁN</h2>
                   </div>
                </div>
            </div>
            </div>
            
        
        
        </div>
    );
}
export default Cart;