import '../css/feedback.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route,Link} from "react-router-dom"
//Star Rating and other modules
import { Rate, Form, Input, Button } from 'antd';
import "antd/dist/antd.css";
function Feedback() {
    //Form with star rating
    const { TextArea } = Input;
    const Feed = () => {
    
    
      return (
        <Form
        
          name="basic"
          initialValues={{ remember: true }}
         
        >
          <h2>Đánh giá chất lượng </h2>
            <Form.Item
              name="rating"
            >
            <Rate allowHalf defaultValue={4.5} />
            </Form.Item>
          <h2>Nhận xét</h2>
          <Form.Item
            name="comment"
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
            <Link to = "/">Gửi</Link>
            </Button>
          </Form.Item>
        </Form>
      );
    };
    return (
    <div className="Feedback">
      <div className="Feed text-center">
          <h1>NCHRestaurant<br>
          </br>Đánh giá của bạn</h1>
      </div>
      
      <div className="container">
          
      <Feed />
      </div>
    </div>
  );
}
export default Feedback;
