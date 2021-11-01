import './App.css';
import Header from './ComponentJS/header'
import Logo from './logo.svg'

function App() {
  return (
    <div className="App">
      <Header/>
      <img scr = {Logo} alt = "react-logo"  ></img>
    </div>
  );
}

export default App;
