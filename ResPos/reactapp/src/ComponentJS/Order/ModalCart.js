import {FaStar,FaMinus,FaPlus,FaStarHalf} from 'react-icons/fa';
import {useEffect, useRef, useState} from 'react';
import './myCss/Modal.css'
function ModalCart(dish,addCart){
    const [num, setNum] = useState(0)
    function plusNum() {
        setNum(num + 1);
    };
    function minusNum() {
        if (num > 0){
            setNum(num - 1);
        }
    };
    function resetNum(){
        setNum(0)
    }
    let modalRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if(modalRef.current){
                if(!modalRef.current.contains(event.target)){
                    resetNum();
                }
            }
        };

        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    })
    return(
    <div id = "myModal" className = "modal fade " role = "dialog" ref={modalRef}>

        
        <div className = "modal-dialog modal-dialog-centered modal-lg">


            <div className = "modal-content" id = 'ModalContent'>


                <div className = "modal-header" id = "ModalHeader">
                    <button id = "closeButton" type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>


                <div className = "modal-body" id = "ModalBody">


                    <div className = "DishImage">

                        <img src = {dish.thumbnail} className="dish-image" alt="Error"/>

                        <div className = "quantity">
                            <div style = {{height: "30px"}}>
                                <h4>Số lượng</h4>
                            </div>
                            <div className="Change-Quantity-1">
                                <button style={{width:"40px"}} onClick = {minusNum}><FaMinus fontSize="20px"/></button>
                                <input  style={{height: "45px", width: "30%"}} value = {num}></input>
                                <button style={{width: "40px"}} onClick = {plusNum} ><FaPlus fontSize="20px"/></button>
                            </div>
                        </div>


                        <div className = "sideDish">
                            <h4 style = {{color: "#c0392b"}}>Món ăn kèm</h4>
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
                            <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Name: </label> {dish.name}</p>
                            <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Tag: </label>Inazuma</p>
                            <p><label style = {{color: "#c0392b", fontWeight: "700"}}>Ingrediant: </label> Liyue</p>
                            <div className = "rating">
                                <p>Đánh giá:</p>
                                <div className = "ratingStar">
                                    <span><FaStar/></span>
                                    <span><FaStar/></span>
                                    <span><FaStar/></span>
                                    <span><FaStar/></span>
                                    <span><FaStarHalf/></span>
                                </div>
                            </div>
                            <div className = "note">
                                <h5 style = {{color: "#c0392b"}}>Ghi chú</h5>
                                <div>
                                    <textarea></textarea>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div className = "modal-footer" id = "ModalFooter">
                    <button className = "orderButton" data-dismiss="modal" onClick={resetNum, ()=>{addCart(dish)}}>Đặt món</button>
                </div>


            </div>


        </div>

    </div>
    );
}
export default ModalCart;