import ReactDOM from 'react-dom/client';
import App from './App';
import { Row, Col, Divider } from 'antd';
import {useState,useEffect} from 'react';
import { Carousel } from 'antd';
import Typewriter from "typewriter-effect";
import 'antd/dist/antd.min.css'; 
import './Login.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Login() {
    useEffect(()=>
    {

      
        var signUpButton = document.getElementsByClassName('signUp')[0];
        var signInButton = document.getElementsByClassName('signIn')[0];
        var container = document.getElementsByClassName('container')[0];
        var homepage = document.getElementsByClassName('homepage')[0];
        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });
        homepage.addEventListener('click', () => {
         
         window.location.href="Home";
           root.render(
             <App></App>)
            



        });
        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });
        


    });
    
    
return (
    
<div className="container" >
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
	
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button>Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>

			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<a href="#">Forgot your password?</a>
			<button className='homepage' >Sign In</button>
		</form>
	</div>
	<div className="overlay-container">
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<h1>Login to Enter Infoview!</h1>
				<button className="eff" className="signIn">Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
                <h1>Welcome To Infoview</h1>
                <div className="typewr">
            <Typewriter   onInit={(typewriter)=> { typewriter 
                .typeString("Don't have an account!") 
                .pauseFor(1000) 
                .typeString(" signUp here.") .start(); }} /> 
				</div>
				<p> </p>
				<button className="eff" className="signUp">Sign Up</button>
			</div>
		</div>
	</div>
</div>

        

        
    );
    
  };

  export default Login;
