import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication1.png';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { useForm } from "react-hook-form";
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() =>{
                Swal.fire({
                    icon: 'success',
                    title: "User created successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/')
            })
            .catch(error =>{
                console.log(error);
            })
        })
        .catch(error =>{
            console.log(error);
        })
    };

    return (
        <>
            <Helmet>
                <title>Bistro Boss | Sign Up</title>
            </Helmet>
            <div className="hero">
                <div className="hero-content bg-base-200 w-3/4 mx-auto my-14 px-20 py-8 flex-col lg:flex-row-reverse login-box">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className='text-red-600'>Name is required*</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className='text-red-600'>Photo URL is required*</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required*</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    /* pattern: /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-_+.]){1,}).$/ */
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>}
                                {/* {errors.password?.type === 'pattern' && <p className='text-red-600'>Validate password using Uppercase, Lowercase, numbers & special characters</p>} */}
                                <label className="label">
                                    <span className="label-text"></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn border-0 bg-[#D1A054]" value="Sign Up" />
                            </div>
                            <p className="text-center text-[#D1A054]">Already registered? <Link to='/login'>Go to log in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;