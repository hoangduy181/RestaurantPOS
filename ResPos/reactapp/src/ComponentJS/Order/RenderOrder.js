import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import './myCss/RenderOrder.css'
import {useState} from 'react'
function RenderOrder({updateTotal}){
    const [orderlist, SetOrderlist] = useState(()=>{
        var Orderlist = []
        if(localStorage.getItem('CART')===null){
            Orderlist=localStorage.setItem('CART','[]')
        }
        else {
            Orderlist = JSON.parse(localStorage.getItem('CART'))
        }
        return Orderlist
    })
    function removeCart(idx){
        SetOrderlist(prev=>{
            const data =  []
            prev.forEach(function(dish, index){
            if(index !== idx ){
                data.push(dish)
            }
            })
            localStorage.removeItem('CART')
            localStorage.setItem('CART',JSON.stringify(data))
            updateTotal()
            return data
        })
    }
    return(
        orderlist.map((dish)=>{
        return(
        <div className="Dish-Cart">

            <div className="Dish-Thumbnail">
                <img src={dish.thumbnail} alt="error"/>
            </div>

            <div className="Dish-Name">
            <label>Name:</label>
            <h1>{dish.name}</h1>
            <label>Topping:</label>
            <select class="form-select" aria-label="Default select example" id="Topping-Selection">
                <option selected>Không</option>
                <option value="1">Hutao</option>
                <option value="2">Keqing</option>
                <option value="3">Baal</option>
            </select>
            </div>


            <div className="Dish-Price">
                <h4>
                   {dish.price}
                </h4>
            </div>

            <div className="Dish-Quantity">
                <div className="Change-Quantity">
                    <form>
                        <button style={{marginRight:"5px",backgroundColor:"#A9493C",color:"White",border:"none"}}><FaMinus fontSize="30px"/></button>
                        <input  style={{width:"120px",height:"50px", textAlign:"center"}}></input>
                        <button style={{marginLeft:"5px",backgroundColor:"#A9493C",color:"White",textAlign:"center",border:"none"}}><FaPlus fontSize="30px"/></button>
                    </form>
                </div>
            </div>

            <div className="Total-Price">

                <div style={{width:"180px",paddingTop:"85px"}}>
                    <h4>
                        abc
                    </h4>
                </div>

                <div style={{lineHeight:"180px"}}>
                <FaTrash color="A9493C" fontSize="40px" onClick={()=>{
                    removeCart(orderlist.indexOf(dish))
                }}/>
                </div>

            </div>
                
        </div>
        
        );})
    );
}
export default RenderOrder;