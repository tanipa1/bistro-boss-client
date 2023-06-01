import { useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication1.png';
import './Login.css';
import { useRef } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const captchaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);
    useEffect(() => {
        loadCaptchaEnginge(6); 
    },[])

    const handleLogin = () => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)==true) {
            setDisabled(false)
            alert('Captcha Matched');
        }
        else {
            setDisabled(true)
            alert('Captcha Does Not Match');
        }
    }

    return (
        <div className="hero">
            <div className="hero-content bg-base-200 w-3/4 mx-auto my-14 px-20 py-8 flex-col lg:flex-row login-box">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                <h1 className="text-5xl text-center font-bold">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <span className="label-text"></span>
                            </label>
                        </div>
                        <div className="form-control">
                            <LoadCanvasTemplate />
                            <input ref={captchaRef} type="text" name="captcha" placeholder="Type the captcha" className="input input-bordered" />
                            <button onClick={handleValidateCaptcha} className="btn btn-outline btn-xs mt-2">Validate</button>
                        </div>
                        <div className="form-control mt-6">
                            <input disabled={disabled} type="submit" className="btn border-0 bg-[#D1A054]" value="Sign In" />
                        </div>
                        <p>Don`t have an account? <Link to='/register'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;