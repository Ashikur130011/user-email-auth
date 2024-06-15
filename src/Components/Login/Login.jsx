import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../../Firebase/firebase.config';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef = useRef(null)
    const [loginError, setLoginError] = useState('')
    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password)
        setLoginError('')
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                alert(`${email} succesfully logged in`)
            })
            .catch(error => {
                const errorCode = error.code
                setLoginError(errorCode)
            })   
    }

    const handleForgetPassword= () => {
        const email = emailRef.current.value
        if(!email){
            setLoginError("Please enter an email")
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
            setLoginError("Please enter a valid email")
            return;
        }
        sendPasswordResetEmail(auth, email)
        .then( () => {
            alert('Please check inbox')
        })
        .catch(error => {
            const errorCode = error.code
            console.log(errorCode)
        })
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" onClick={handleForgetPassword} className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            {
                               loginError && <p>{loginError}</p>
                            }
                            <p>New to this website? Please <Link className='text-blue-600 font-semibold' to="/register">Register</Link></p>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;