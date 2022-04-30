import React, { useEffect ,useState} from 'react';
import { Layout, Menu, Breadcrumb,Image ,Card} from 'antd';
import ReactDOM from 'react-dom/client';
//import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import 'antd/dist/antd.min.css'; 
import './layout.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Profile from "./Profile";
import Home from "./Home";
import Requests from "./Request";
import Login from './Login';
import Forum from './Forum';
const { Header, Content, Footer, Sider } = Layout;


function App() {
  
  function liactivLink(key2){
   window.location.href=key2;
      const list=document.querySelectorAll('.curvedlist'); 
    list.forEach((item)=>
     {
    item.classList.remove('liactiv');
    if(item.textContent==key2){
      item.classList.add('liactiv');
    }
     }
    );
    }

 function setActiveClass(key2){
 const keyclass=key2.split('/');
      const list=document.querySelectorAll('.curvedlist');
    list.forEach((item)=>
     {
    item.classList.remove('liactiv');
    if(item.textContent==keyclass[3]){
      item.classList.add('liactiv');
    }
     }
    );
    }
  useEffect(() => {

      setActiveClass(window.location.href);

  });

  //list.forEach((item)=>item.addEventListener('click',liactivLink));
  return(
    <>

  <Layout className="layout"
  style={{
    
    height:'100vh'
  }}>
 
    <Content 
      style={{
        padding: '0 10px',
        height:'100vh'
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
    
      </Breadcrumb>
      <Layout
        className="site-layout-background main"
        style={{
          padding: '24px 0px 24px 24px',
          height:'92vh'
        }}
      >
       
        <Sider  className="site-layout-background side "  style={{
       minWidth:'100px !important' ,
        }}>
      
          <div className="curvemenu">
            <ul>
              <li className="curvedlist" onClick={()=>liactivLink("Home")}  key="home">
                <a href="/Home">
                  <span className="icon" ><ion-icon name="home-outline"></ion-icon></span>
                  <span className="stext">Home</span>
                </a>
              </li>
              <li className="curvedlist" onClick={()=>liactivLink("Profile")} key="profile"> 
                <a href="#">
                  <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                  <span className="stext">Profile</span>
                </a>
              </li>
              <li className="curvedlist" onClick={()=>liactivLink("Requests")} key="request">
                <a href="#">
                  <span className="icon"><ion-icon name="reader-outline"></ion-icon></span>
                  <span className="stext">Requests</span>
                </a>
              </li>
              <li className="curvedlist" onClick={()=>liactivLink("Forum")}>
                <a href="#">
                  <span className="icon"><ion-icon name="help-buoy-outline"></ion-icon></span>
                  <span className="stext">Forum</span>
                </a>
              </li>
              <li className="curvedlist" onClick={()=>liactivLink("Settings")}>
                <a href="#">
                  <span className="icon"><ion-icon name="hammer-outline"></ion-icon></span>
                  <span className="stext">Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </Sider>
        <Content className="con"
          style={{
            padding: '0 24px',
            minHeight: 280,
            overflow:'auto'
            
          }}>
           
               <div className="divbor">
              
                     <BrowserRouter>



                                     <Routes>
                                               <Route path="/" render={ <Home/> } />
                                               <Route path="Home" element={<Home/>} />
                                               <Route path="Profile" element={<Profile/>} />
                                               <Route path="Requests" element={<Requests/>} />
                                               <Route path="Forum" element={<Forum/>} />
                                               <Route path="Login" element={
                                                  
                                               <Login/> } />


                                               
                                           </Routes>
                                         </BrowserRouter>
                                       
                                         </div>
                                         
        </Content>
        
      </Layout>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      Ant Design ©2018 Created by Ant UED
    </Footer>
  </Layout>
  </>
);
    }
export default App;