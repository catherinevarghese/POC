import React, { useEffect, useState } from 'react';
import {
    Form, Input, Button, Card,
  } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import {verificationActions} from '../../_actions';
import userActions from '../../_actions/user.actions';

const OtpVerification = () => {
const number = JSON.parse(localStorage.getItem('phoneNumber'));
const [form] = Form.useForm();
const [data, setVerification] = useState();
const dispatch = useDispatch();
const authentication = useSelector((state) => state.authentication);
const verification = useSelector((state) => state.otpVerification);
const registration = useSelector((state) => state.registration);
const { register} = registration;
  const { isVerify } = verification;

const handleChange = (e) => {
  !registration &&   setVerification({
      ...data,
     phoneNumber: `${number}`,
      [e.target.name]: e.target.value,
      token:`${authentication.token}`,

    });
    registration && setVerification({
      ...data,
       [e.target.name]: e.target.value,
      phoneNumber: `${number}`,
      token:`${authentication.token}`,
    })
    console.log(data);
  };

const handleSubmit = () => {
  console.log(register);
    console.log("the form is submitted",data);
   !register && dispatch(verificationActions.otpVerification(data));
   register  && dispatch(verificationActions.newEmailVerification(data))
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
          <h1>{register ? <b>Email Link Verification</b>: <b>OTP Verification</b>}</h1>
      }
        style={{ width: '25rem' }}
      >
          <Form form={form}
           onFinish={handleSubmit}>
      { register ? <Form.Item>
        <label style={{width:100, color:'blue'}}>Email Id</label>
        <Input placeholder="Enter the email ID"  name='email'  onChange={(e) => handleChange(e)}/>
      </Form.Item> : <Form.Item>
        <label style={{width:100, color:'blue'}}>Phone Number</label>
        <Input value={number} />
      </Form.Item>}
      
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
export default OtpVerification;