import React from 'react'
import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa';
import { useState } from 'react'
import '../Ordercss/ChangeQuantity.css'
import { Row, Col, ListGroup, Image, Form } from 'react-bootstrap'
export default function ChangeQuantity({item, reload, removeDish}) {
    const [num, setNum] = useState(()=>{
        return item.quantity
    });
    const minusNum = () => {
        if(num > 1){
            item.quantity -=1
            setNum(num - 1)
        }
        reload()
    };
    const plusNum =() => {
        item.quantity += 1
        setNum(num + 1)
        reload()
    };
    
    const handleremove =()=>{
        removeDish(item)
        setNum(item)
    }
    return (
        <ListGroup.Item key={item._id} as='div' style={{padding:'0px', backgroundColor:'#A9493C'}}>
            <Row as='div' style={{backgroundColor:'cornsilk'}}>
                <Col md={3}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                </Col>
                <Col id="propertiesOnCart" md={9} as='div' style={{display:'flex'}}>
                    <Col md={3}>
                        <p style={{fontSize:'1.5vmax', marginBottom:'0px'}}>
                            <label style = {{color: "#A9493C", fontWeight: "700"}}>Name: </label> {item.name}
                        </p>
                        <h4 style={{fontSize:'1.3vmax', color:'#A9493C'}}>Topping</h4>
                        <Form.Select aria-label="Default select example" id="toppingSelection">
                            <option>None</option>
                            <option value="1">{item.topping[0]}</option>
                            <option value="2">{item.topping[1]}</option>
                            <option value="3">{item.topping[2]}</option>
                        </Form.Select>
                    </Col>
                    <Col md={1} as='div' id="priceOnCart">
                        <h3 style={{color:"#A9493C", marginBottom:'40%'}}>Price</h3>
                        <h3>${item.price}</h3>
                    </Col>
                    <Col md={3} as='div' id="quantityOnCart">
                        <h3>Quantity</h3>
                        <div className="changeQuantity" style={{fontSize:'1.7vmax', border:'none'}}>
                            <button onClick={minusNum}><FaMinus /></button>
                            <input value={item.quantity}></input>
                            <button onClick={plusNum}><FaPlus /></button>
                        </div>
                    </Col>
                    <Col md={1} as='div' id="totalMoneyOnDish">
                        <h3 style={{color:"#A9493C", marginBottom:'40%'}}>Total</h3>
                        <h3>${item.price * item.quantity}</h3>
                    </Col>
                    <Col md={1} as='div' id="deleteItem">
                        <FaTrash onClick={()=>{handleremove(item)}}/>
                    </Col>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}
