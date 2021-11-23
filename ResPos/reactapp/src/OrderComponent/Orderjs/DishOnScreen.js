import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ModalCard from './ModalCard'
import '../Ordercss/DishOnScreen.css'
export default function DishOnScreen({ dish }) {
    function addDish(dishcur){
        const data = JSON.parse(localStorage.getItem('Cart'));
        if(data.length === 0){
            data.push(dishcur)
        }
        else{
            let check = false
            for(let i = 0; i < data.length; i++){   
                if (data[i].name === dish.name){
                    data[i].quantity += dishcur.quantity
                    check = true
                }

            }
            if (check === false){
                data.push(dishcur)
            }
        }
        localStorage.setItem('Cart',JSON.stringify(data))
    }
    return (
            <Card className='my-3 p-3 rounded' >
            <ModalCard dish={{...dish}} addDish = {addDish} />
            <Card.Body>

                    <Card.Title as='div'>
                        <strong>{dish.name}</strong>
                    </Card.Title>

                <Card.Text as='h3'>${dish.price}</Card.Text>
                <Button  id="Orderbtn" variant='primary' onClick={()=>{addDish(dish)}}>Đặt món</Button>
            </Card.Body>
            </Card>

    )
}
