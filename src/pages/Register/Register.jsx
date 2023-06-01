import { Link } from 'react-router-dom';
import loginImg from '../../assets/others/authentication1.png';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className="hero">
            <div className="hero-content bg-base-200 w-3/4 mx-auto my-14 px-20 py-8 flex-col lg:flex-row-reverse login-box">
                <div className="text-center lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="email" className="input input-bordered" />
                        </div>
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
                        <div className="form-control mt-6">
                            <input type="submit" className="btn border-0 bg-[#D1A054]" value="Sign Up" />
                        </div>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;