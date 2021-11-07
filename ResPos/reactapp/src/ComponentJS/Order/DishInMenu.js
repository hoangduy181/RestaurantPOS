import './myCss/DishInMenu.css'
import ModalCart from './ModalCart';
function DishInMenu ({dish, dishcur, callmodal,addCart}){
    return (
    <div className="Item">


        <div className="Item-Body">


            <div className="Item-Image" >
            <img src= {dish.thumbnail} className="item-image" alt="Error"  data-toggle = "modal" data-target = "#myModal" onClick={callmodal}/>
            </div>


            <svg >
                <g fill="none">
                    <path stroke="#A9493C" d="M 5 20 l290 0" strokeWidth="4"/>
                </g>
            </svg>

        </div>


        <div className="Item-Footer">

            <div className="Name-Item">
                {dish.name}
            </div>


            <div className="Item-Price">
                {dish.price}
            </div>


            <div className="Item-Cart">
                 <button className="Button-Order" onClick={()=>{addCart(dish)}}>Đặt món</button>
                 {ModalCart(dishcur,addCart)}
            </div>

        </div>


    </div>
    );
}
export default DishInMenu;