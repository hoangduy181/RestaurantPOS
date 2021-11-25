import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom"
import { FaBars, FaHome, FaShoppingCart, FaUser } from "react-icons/fa";
import '../css/SeatHeader.css';
import '../css/SeatResponsive.css';
import '../css/SeatBody.css';
class Seat extends React.Component {
  
  constructor() {
    super();
      this.state = {
      seat: [
        '1','2','3','4','5','6','7','8','9','10',
        '11','12','13','14','15','16','17','18','19','20',
        '21','22','23','24','25','26','27','28','29','30',
        '31','32','33','34','35','36','37','38','39','40'
      ],
      seatAvailable: [
        '1','2','3','4','5','6','7','8','9','10',
        '11','12','13','14','15','16','17','18','19','20',
        '21','22','23','24','25','26','27','28',
        '31','32','33','34','35','36','37','38','39','40'
      ],
      seatReserved: [
      ],
      seatOccupied: [
        '29','30'
      ]
    }
  }
  onClickData(seat) {
    if(this.state.seatOccupied.indexOf(seat) <= -1 ){
    if(this.state.seatReserved.indexOf(seat) > -1 ) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter(res => res != seat)
      })
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter(res => res != seat)
      })
    }
  }
}
  
  render() {
      function showMenu(){
        var menuBar = document.getElementById('HeaderCart');
        var isClose = menuBar.clientHeight === 50
        if(isClose){ 
            menuBar.style.height='auto'
        }
        else{
            menuBar.style.height='50px'
        }
      }
    return (
      <div className="Seat-Contents">
        <div  id = "HeaderCart">
        <div id="Fabars-icon" onClick={showMenu}><FaBars color="#FFFAE7" /></div>
        <ul id="nav">
                <li><FaHome/></li>
                <li><Link to="/" style={{color:"#FFFAE7",textDecoration:"none"}}>THỰC ĐƠN</Link></li>
                <li>KHUYẾN MÃI</li>
                <li>CỬA HÀNG</li>
                <li>VỀ CHÚNG TÔI</li>
                <li><FaUser/></li>
                <li><Link to="/Cart" style={{color:"#FFFAE7",textDecoration:"none"}}><FaShoppingCart/></Link></li>
        </ul>
      </div>
      <div className="YourTable">
        <h1>Chọn Bàn</h1>
      </div >
        <DrawGrid
          seat = { this.state.seat }
          available = { this.state.seatAvailable }
          reserved = { this.state.seatReserved }
          occupied = { this.state.seatOccupied }
          onClickData = { this.onClickData.bind(this) }
          />
        </div>
    )
  }
} 

class DrawGrid extends React.Component {
  render() {
    return (
       <div className="container">
        <table className="grid">
          <tbody>
              <tr>
                { this.props.seat.map( row =>
                  <td 
                    className={this.props.occupied.indexOf(row) > -1? 'occupied':this.props.reserved.indexOf(row) > -1? 'reserved': 'available'}
                    key={row} onClick = {e => this.onClickSeat(row)}>{row} </td>) }
              </tr>
          </tbody>
        </table>
        <div className="Footer-Seat">
            <div className="Seating">
              <div className="Seating-1">
                  <h3>Bàn đang chọn:</h3>
              </div>
              <div className="Seating-2">
                  <h3><ReservedList reserved = { this.props.reserved } /></h3>
              </div>
              <div className="Seating-OK">
                {/* Link tới thanh toán*/}
                <Link to="/" style={{textDecoration:"none"}}> <h3>OK</h3> </Link>
              </div>
            </div>
        </div>
       </div>
    )
  }
  
  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}

class AvailableList extends React.Component {
  render() {
    const seatCount = this.props.available.length;
    return(
      <div className="left">
        <h4>Available Seats: ({seatCount == 0? 'No seats available' : seatCount})</h4>
          {this.props.available.map( res => <li key={res} >{res}</li> )}
      </div>
    )
  }
}
class ReservedList extends React.Component {
  render() {
    return(
      <div className="right">
          { this.props.reserved.map(res => <a key={res} >{res},</a>) }
      </div>
    )
  }
}

export default Seat;
