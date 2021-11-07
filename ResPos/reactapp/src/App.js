import './App.css';
import Menu from './ComponentJS/Order/Menu';
import Cart from './ComponentJS/Order/Cart'
import { BrowserRouter as Router, Routes, Route,Link,useRoutes } from "react-router-dom"
function App() {
  let routes = useRoutes([
    { path: "/", element: <Menu /> },
    { path: "/Cart", element: <Cart /> },
  ]);
  return (
    routes
  );
}

export default App;
