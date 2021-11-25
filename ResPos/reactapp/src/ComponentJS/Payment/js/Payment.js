import { BrowserRouter as Router, Routes, Route,Link,Switch } from "react-router-dom"
import HeaderCart from '../../OrderComponent/Orderjs/HeaderCart';
import CartScreen from "../../OrderComponent/Orderjs/CartScreen";
import Thanks from './Thanks';
import "../css/Payment.css"

function Payment() {
  return (
    <div class="body">
      {/* <meta charSet="utf-8" />
      <title>Payment</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <link rel="stylesheet" href="payment.css" /> */}

      <HeaderCart />
      <div className="Payment-header">
        <div className="headerCart-Icon">
          {/* <Link to="/CartScreen"><div >< size="50px" color="#F9C846"/></div></Link>
              <div fontWidth="30px" textColor="#FBE09A">
              <div >Menu</div>
              </div> */}
          </div>

        <div className="Payment-title">
          <p>Thanh toán</p>
        </div>

        <div className="Payment-user" />
        <div className="Payment-shopcar" />
      </div>

      <div className="Payment-content">
        <div className="Payment-voucher">
          <div className="use-voucher">
            <form action>
              <label htmlFor="voucher">Nhập voucher để sử dụng:</label><br /><br />
              <input type="text" id="voucher"  />
            </form>
          </div>
          <div className="not-available">
            <p>[Hiện chưa khả dụng]</p>
          </div>
          <div className="use-point">
            <form>
              <label htmlFor="point"> Sử dụng điểm tích lũy</label>
              <input type="checkbox" id="point" name="point" defaultValue="point" />
            </form>
          </div>
        </div>

        <div class="hr">
          <hr />
        </div>

        <div className="Payment-method">
          <p className="p">Chọn phương thức thanh toán</p>

          <div className="Payment-method2">
            <form className="boxed" method="post" onClick={Thanks}>
              <input type="radio" id="credit-debit" name="method" defaultValue="Credit Debit card" />
              <label htmlFor="credit-debit">Thẻ tín dụng/ghi nợ </label>

              <input type="radio" id="electronic-wallet" name="method" defaultValue="Electronic wallet" />
              <label htmlFor="electronic-wallet">Ví điện tử </label>

              <input type="radio" id="mobile-money" name="method" defaultValue="Mobile money" />
              <label htmlFor="mobile-money">Mobile money </label>

              <input type="radio" id="cash" name="method" defaultValue="cash" />
              <label htmlFor="cash">Tiền mặt </label>
            </form>
          </div>

          <div className="Payment-money">
            <div className="Payment-money-left">
              <p>Tổng tiền món ăn: </p>
              <p> Giảm: </p>
              <hr />
              <p> Tổng thanh toán: </p>
            </div>
            <div className="Payment-money-rigth">
              <p> 1 </p>
              <p>-2</p>
              <hr />
              <p>3</p>
            </div>
          </div>

          <div className="submit">
            <form onClick={Thanks}>
              <input type="submit" defaultValue="Đặt & thanh toán"/>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment;