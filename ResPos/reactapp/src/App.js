import './App.css';
import OrderScreen from './ComponentJS/OrderComponent/Orderjs/OrderScreen';
import CartScreen from './ComponentJS/OrderComponent/Orderjs/CartScreen';
import { BrowserRouter as Router, Routes, Route,Link,useRoutes } from "react-router-dom"
function App() {
  let routes = useRoutes([
    { path: "/", element: <OrderScreen /> },
    { path: "/Cart", element: <CartScreen /> },
  ]);
  return (
    routes
  );
}

export default App;
