import item1 from '../Images/item6-1.png'
import item2 from '../Images/item4-2.png'

const cartItems = [
    {
        _id: '1',
        name: 'something 1',
        image: item1,
        quantity: '1',
        price: '10',
        topping: ["Topping 1", "Topping 2", "Topping 3"],
        rating: 4
    },
    {
        _id: '3',
        name: 'something 3',
        image: item1,
        quantity: '1',
        price: '15',
        topping: ["Topping 1", "Topping 2", "Topping 3"],
        rating: 3.5
    },
    {
        _id: '6',
        name: 'something 6',
        image: item2,
        quantity: '1',
        price: '20',
        topping: ["Topping 1", "Topping 2", "Topping 3"],
        rating: 4
    },
    {
        _id: '8',
        name: 'something 8',
        image: item2,
        quantity: '1',
        price: '25',
        topping: ["Topping 1", "Topping 2", "Topping 3"],
        rating: 3.5
    },
]

export default cartItems;