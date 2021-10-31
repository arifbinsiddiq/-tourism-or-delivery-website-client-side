import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';



    const handleGoogleLogin = ()=>{
        signInUsingGoogle()
        .then(result =>{
            console.log(result);
            history.push(redirect_uri);
        })
    }
    


    return (
        <div className="login-form">
            <div>
                <h2>Please Login</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="login-btn">
                        Login
                    </Button>
                </Form>
                <div className="login-or">Login with</div>
                <button 
                    onClick={handleGoogleLogin} 
                    className="google-btn" 
                >
                    <i className="fab fa-google"></i>
                     Google
                </button>
            </div>
        </div>
    );
};

export default Login;