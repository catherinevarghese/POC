import React, { useEffect, useState } from 'react';
import {
    Form, Input, Button, Card,
  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {verificationActions} from '../../_actions';
import userActions from '../../_actions/user.actions';

const EmailVerification = () => {
const number = JSON.parse(localStorage.getItem('phoneNumber'));
const jwt = JSON.parse(localStorage.getItem('jwt'))
const [form] = Form.useForm();
const [data, setVerification] = useState();
const dispatch = useDispatch();
const authentication = useSelector((state) => state.authentication);
const verification = useSelector((state) => state.otpVerification);
const registration = useSelector((state) => state.registration);
const { register} = registration;
  const { isVerify } = verification;

const handleChange = (e) => {
    registration && setVerification({
      ...data,
       [e.target.name]: e.target.value,
    //   phoneNumber: `${number}`,
      token:`${jwt}`,
    })
    console.log(jwt);
  };

const handleSubmit = () => {
  console.log(isVerify);
    console.log("the form is submitted",data);
//    (!registration) && dispatch(verificationActions.otpVerification(data));
     dispatch(verificationActions.newEmailVerification(data))
    form.resetFields();
    setVerification({
      token:`${authentication.token}`,
    })
}
    return(
        <div>
             <Card
        align="middle"
        className="loginpage-container"
        title={
          <h1><b>Email Link Verification</b></h1>
      }
        style={{ width: '25rem' }}
      >
          <Form form={form}
           onFinish={handleSubmit}>
     <Form.Item>
        <label style={{width:100, color:'blue'}}>Email Id</label>
        <Input placeholder="Enter the email ID"  name='email'  onChange={(e) => handleChange(e)}/>
      </Form.Item> 
      
       <Form.Item>
      <label style={{width:100, color:'blue'}}>Verification Code</label>
      <Input   placeholder="Enter the verification code"
          name='verificationCode'
          // value = 'Enter the verification code'
          onChange={(e) => handleChange(e)}
      ></Input>
      </Form.Item>

     
      <Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          className="login-form-button"
          // onClick = {changeVerify}
        >
        Verify
        </Button>
      </Form.Item>
          </Form>
      </Card>
        </div>
    )
}
export default EmailVerification;