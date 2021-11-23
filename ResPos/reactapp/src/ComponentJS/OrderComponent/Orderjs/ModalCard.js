import { FaMinus, FaPlus } from 'react-icons/fa';
import React from 'react'
import { useState } from 'react';
import { Card, Modal, Button, Form } from 'react-bootstrap'
import '../Ordercss/ModalCard.css'

export default function ModalCard( {dish, addDish} ) {
    const [show, setShow] = useState(false);

    const handleClose = () => {
        addDish(dish)
        resetNum();
        setShow(false);
    };
    const handleCloseOver = () => {
        resetNum();
        setShow(false);
    };
    const handleShow = () => setShow(true);

    const [num, setNum] = useState(1);

    const minusNum = () => {
        if(num > 1){
            dish.quantity = num -1
            setNum(num - 1)
        }
    };
    const plusNum = () => {
        dish.quantity = num +1 
        setNum(num + 1)
    };
    const resetNum = () => {
        dish.quantity = 1
        setNum(1)
    };

    return (
        <div>
            <Card.Img src={dish.image} variant='top' onClick={handleShow}/>

            <Modal show={show} onHide={handleCloseOver} centered size="xl" dialogClassName="border-radius-2">
                <Modal.Header id="modalHeader" style={{border:'none'}} closeButton></Modal.Header>
                <Modal.Body id="modalBody" style={{border:'none'}}>
                    <div style={{border:'none'}} className="Half1">
                        <div className="dishImage" style={{border:'none'}}>
                            <img src={dish.image} className="img-fluid" alt="Error"/>
                        </div>

                        <div className="Quantity" style={{border:'none'}}>
                            <h4>Quantity</h4>
                            <div className="changeQuantity" style={{fontSize:'1.7vmax', border:'none'}}>
                                <button onClick={minusNum}><FaMinus /></button>
                                <input value = {num}></input>
                                <button onClick={plusNum}><FaPlus /></button>
                            </div>
                        </div>
                        
                        <div className="dishTopping" style={{border:'none'}}>
                            <h4>Topping</h4>
                            <Form.Select aria-label="Default select example" id="toppingSelection">
                                <option>None</option>
                                <option value="1">{dish.topping[0]}</option>
                                <option value="2">{dish.topping[1]}</option>
                                <option value="3">{dish.topping[2]}</option>
                            </Form.Select>
                        </div>
                    </div>

                    <div className="Half2" style={{border:'none'}}>
                        <div className="Properties" style={{border:'none'}}>
                            <p><label style = {{color: "#A9493C", fontWeight: "700"}}>Name: </label> {dish.name}</p>
                            <p><label style = {{color: "#A9493C", fontWeight: "700"}}>Tag: </label> {dish.tag}</p>
                            <p><label style = {{color: "#A9493C", fontWeight: "700"}}>Ingrediant: </label> {dish.ingrediant}</p>
                            <div className="Rating" style={{border:'none'}}>
                                <p style={{fontSize:'2vmax', color:'#A9493C', fontWeight:'700', marginBottom:'0px'}}>Rating: </p>
                                <div className="Stars" style={{border:'none'}}>
                                    <span>
                                        <i 
                                            className={
                                                dish.rating >= 1
                                                 ? 'fa fa-star'
                                                 : dish.rating >= 0.5 
                                                 ? 'fa fa-star-half'
                                                 : ''
                                            }
                                        ></i>
                                    </span>
                                    <span>
                                        <i 
                                            className={
                                                dish.rating >= 2
                                                 ? 'fa fa-star'
                                                 : dish.rating >= 1.5 
                                                 ? 'fa fa-star-half'
                                                 : ''
                                            }
                                        ></i>
                                    </span>
                                    <span>
                                        <i 
                                            className={
                                                dish.rating >= 3
                                                 ? 'fa fa-star'
                                                 : dish.rating >= 2.5 
                                                 ? 'fa fa-star-half'
                                                 : ''
                                            }
                                        ></i>
                                    </span>
                                    <span>
                                        <i 
                                            className={
                                                dish.rating >= 4
                                                 ? 'fa fa-star'
                                                 : dish.rating >= 3.5 
                                                 ? 'fa fa-star-half'
                                                 : ''
                                            }
                                        ></i>
                                    </span>
                                    <span>
                                        <i 
                                            className={
                                                dish.rating >= 5
                                                 ? 'fa fa-star'
                                                 : dish.rating >= 4.5 
                                                 ? 'fa fa-star-half'
                                                 : ''
                                            }
                                        ></i>
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div className="Note" style={{border:'none'}}>
                            <h5 style={{color:"#A9493C", fontSize:'2vmax'}}>Note</h5>
                            <textarea></textarea>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer id="modalFooter" style={{border:'none', justifyContent:'center'}}>
                    <Button id="orderButton" onClick={handleClose}>Đặt món</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
