import {useState,useEffect} from 'react';
import { Card ,Col, Row } from 'antd';
import './home.css';
import first from './parallax/saven.jpeg';
import second from './parallax/save8.png';
import third from './parallax/transparentborder.png';
import hr from './parallax/save11.png';
import hr1 from './parallax/save12.png';
import hr2 from './parallax/save13.png';
import hr3 from './parallax/save14.png';
import hr4 from './parallax/save15.png';
import hr5 from './parallax/save16.png';



function Home() {
  const[ctop,changetop]=useState(0);
  const[ctop2,changetop2]=useState(0);
  const[ctop3,changetop3]=useState(0);
  const[ctop4,changetop4]=useState(0);
 
 
  useEffect(()=>
  {
    var ele=document.getElementsByClassName('con')[0];
    var valu=ele.scrollTop;
    
    //var htext1=document.getElementsByClassName('htext')[0];
   ele.addEventListener('scroll',()=>changetop(valu*0.5+'px'));
   ele.addEventListener('scroll',()=>changetop2(valu*0.5+'px'));
   ele.addEventListener('scroll',()=>changetop3(valu*0.15+'px'));
   ele.addEventListener('scroll',()=>changetop4(valu*1.1+'px'));
      ele.addEventListener('scroll',()=>{
        if(ele.scrollTop===0){
        changetop(0);
      }
      });

   
  }
  );
  const { Meta } = Card;
  return (
    <div className="hei">
    <div className="maindiv"  >
    <img className="firstimg" src={first} style={{ top:ctop}} alt="bg"></img>
    <img className="thirdimg" src={third} style={{ top:ctop2}} alt="border" ></img>
    <img className="secondimg" src={second} style={{ top:ctop3}} alt="footer"></img>
    
    <h2 className="htext" style={{ top:ctop4}}>Infoview</h2>
  
    </div>
    <div style={{backgroundColor:'transparent' , width:'100%', justifyContent:'center',margin:'0px 0px'}}> 
    <div style={{backgroundColor:'transparent', width:'1200px',maxWidth:'1200px', align:'center',margin:'0px auto',position:'relative'}}> 
    <div className="site-card-wrapper" style={{margin:'0px 0px'}}>
    <Row gutter={16} >
      <Col span={8}>
      <Card hoverable  className="boxCard" 
    style={{top:'20px'}}
    cover={<img alt="example" src={hr} alt="hr" />}>
      <Meta  className="mtext"  description="HR Management"  align="center"/>
   
    </Card>
      </Col>
      <Col span={8}>
      <Card hoverable className="boxCard"
    style={{  top:'20px'}}
    cover={<img alt="example" src={hr1} alt="hr" />}>
       <Meta   className="mtext" description="Finance & Accounting"  align="center"/>
   
    </Card>
      </Col>
      <Col span={8}>
      <Card hoverable className="boxCard"
    style={{   top:'20px'}}
    cover={<img alt="example" src={hr2} alt="hr" />}>
       <Meta  className="mtext" description="Supply Chain Management"  align="center"/>
    
    </Card>
      </Col>
    </Row>

    <Row gutter={16}     style={{backgroundColor:'transparent' ,position:'relative',top:'20px'}}>
      <Col span={8}>
      <Card hoverable className="boxCard"
    style={{top:'20px'}}
    cover={<img alt="example" src={hr3} alt="hr" />}>
      <Meta   className="mtext" description="Subscription Economy Systems"  align="center"/>
    
    </Card>
      </Col>
      <Col span={8}>
      <Card hoverable className="boxCard"
    style={{   top:'20px'}}
    cover={<img alt="example" src={hr4} alt="hr" />}>
      <Meta   className="mtext" description="eCommerce"  align="center"/>
   
    </Card>
      </Col>
      <Col span={8}>
      <Card hoverable className="boxCard"
    style={{  top:'20px'}}
    cover={<img alt="example" src={hr5} alt="hr" />}>
     <Meta  className="mtext"  description="Business Process Management"  align="center" />
    </Card>
      </Col>
    </Row>
  </div>
  </div>  
    </div>
    </div>
    );
};

export default Home;