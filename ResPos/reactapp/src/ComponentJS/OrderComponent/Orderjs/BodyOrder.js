import React from 'react'
import {Row, Col} from 'react-bootstrap'
import '../Ordercss/BodyOrder.css'
import DishOnScreen from './DishOnScreen' 
export default function BodyOrder({searchDish}) {

    return (
        <div className = "Body-OrderScreen">
            <Row id ="DishOnScreen">
                {searchDish.map(dish => (
                    <Col sm={12} md={8} lg={4} xl={3}>
                        <DishOnScreen dish = {dish} />                        
                    </Col>
                ))}
            </Row>
        </div>
    )
}
