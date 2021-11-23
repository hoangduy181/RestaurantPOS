import './App.css';
import OrderScreen from './ComponentJS/OrderComponent/Orderjs/OrderScreen';
import CartScreen from './ComponentJS/OrderComponent/Orderjs/CartScreen';
import Feedback from './ComponentJS/Feedback/js/feedback';
import { BrowserRouter as Router, Routes, Route,Link,useRoutes } from "react-router-dom"
function App() {
  let routes = useRoutes([
    { path: "/", element: <OrderScreen /> },
    { path: "/Cart", element: <CartScreen /> },
    { path: "/Feedback", element: <Feedback /> },
  ]);
  return (
    routes
  );
}

export default App;
