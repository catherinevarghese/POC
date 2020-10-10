import React, { useState, useEffect } from 'react';
import {
  Form, Input, Button, Card,Row
} from 'antd';
import { Menu } from 'antd';
    import {
      AppstoreOutlined,
      MenuUnfoldOutlined,
      MenuFoldOutlined,
      PieChartOutlined,
      DesktopOutlined,
      ContainerOutlined,
      MailOutlined,
    } from '@ant-design/icons';

import { Layout } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { history } from '../../_helpers';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import '../../css/loginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { PATH_CONSTANTS } from '../../_constants';
import { LOGIN_FORM_ELEMENTS, LOGIN_FORM_TEXT } from '../pageConstants/loginFormConstants';
import  userActions from '../../_actions/user.actions';

// import { useDispatch, useSelector } from 'react-redux';

const { Header, Sider, Content } = Layout;
const DashboardPage = () => {
    const [form] = Form.useForm();
const dispatch = useDispatch();
const [collapsed, setCollapsed] = useState(false);
const user_details = useSelector((state) => state.otpVerification); 
console.log(user_details.user_details.results.user);
localStorage.setItem('auth_token',user_details.user_details.results.user.token) ;
localStorage.setItem('user_id',user_details.user_details.results.user._id);
const [isEdit,setEdit] =useState();
const [details, setDetails] = useState();
const [edit, setEdits] = useState();
    const  toggleCollapsed = () => {
      setCollapsed(!collapsed);
      };
    const editProfile = () =>{
     setEdit({
         isEdit: true
     });
// const details = {
//         firstName: "CAAN", 
//         lastName: "Bharadhwaji",
//         avatar: null   
// };
console.log(isEdit)
     
    }
    // useEffect (() =>{
    //     setEdit({
    //         isEdit: false
    //     });
    // },[edit])
   const handleChange = (e) => {
    setDetails({
        ...details,
        [e.target.name]: e.target.value,
        avatar: null 
      });
      console.log(details)
   } 
   const handleSubmit = () =>{
       console.log('form is submitted');
       dispatch(userActions.editProfile(details));
       setEdits({
           edit:false
       });
       history.push(PATH_CONSTANTS.LOGIN);
     
   }
   const logout = () => {
     dispatch(userActions.logout());
   }
        return (
            <Layout style={{ height: "100vh"}}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />} onClick={editProfile}>
                 Edit Profile
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={logout}>
                Log Out
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header className="site-layout-background" style={{ padding: 0 }}>
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: toggleCollapsed,
                })}
              </Header>
              {isEdit ? 
                 <Card
                 align="middle"
                 className="loginpage-container"
                 title={
                  <h1> <b>Edit the Profile</b></h1>
               }
                 style={{ width: '25rem' }}
               >
                   <Form form={form}
                   onFinish={handleSubmit}>
            
              <Form.Item>
              <label style={{width:100, color:'blue'}}>First name</label>
              <Input   placeholder="Enter the first name"
                  name='firstName'
                  // value = 'Enter the verification code'
                  onChange={(e) => handleChange(e)}
              ></Input>
              </Form.Item>
               <Form.Item>
              <label style={{width:100, color:'blue'}}>Last name</label>
              <Input   placeholder="Enter the last name"
                  name='lastName'
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
                Submit
                </Button>
              </Form.Item>
                  </Form>
                  </Card>
              : 
              <Content
                className="site-layout-background"
                style={{
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                }}
              >
                  <Row>
                  <label>First Name:</label>
                <span>{user_details.user_details.results.user.firstName}</span>
                  </Row>
              <Row>
              <label>Last Name:</label>
                <span>{user_details.user_details.results.user.lastName}</span>
              </Row>
              <Row>
              <label>Phone Number:</label>
                <span>{user_details.user_details.results.user.phoneNumber}</span>
              </Row> 
              </Content>}
            </Layout>
          </Layout>
        );
        
    
    
}

export default DashboardPage;