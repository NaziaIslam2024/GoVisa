import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import signupPic from '../../assets/up.svg';
import { FaEye } from "react-icons/fa";
import arrow from '../../assets/undraw_fun-arrow.svg';
import { FcGoogle } from "react-icons/fc";
import Swal from 'sweetalert2';

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(null);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                navigate('/');
            })
            .catch(error => Swal.fire("Error: ", error.message))
    }
    const handleSignUp = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        const name = e.target.name.value;
        // console.log("Sihn up hoooooo:", email, password);
        //password validation 
        if (password.length < 6) {
            // setErrorMessage("Password Length must be at least 6 character.");
            Swal.fire("Password Length must be at least 6 character.");
            return;
        }
        const passwordRegeX = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegeX.test(password)) {
            // setErrorMessage("Please add at least one Uppercase letter & one Lowercase letter in your password.");
            Swal.fire("Please add at least one Uppercase letter & one Lowercase letter in your password.")
            return;
        }
        createUser(email, password)
            .then(result => {
                Swal.fire("User created successful.");
                navigate('/');
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            })
            e.target.reset();

    }
    return (
        <div className='md:flex md:gap-20 w-10/12 mx-auto my-20 justify-center items-center'>
            <div className='bg-[#f9ae3f] p-1 lg:p-10 md:w-1/2 text-center '>
                <div className='relative text-white'>
                    <h1 className='text-lg lg:text-2xl font-bold'>Sign Up</h1>
                    <h1>Create your account</h1>
                    <h3>Have an account? <Link className='font-bold text-' to='/signin'>Sign in now</Link></h3>
                    <img className='hidden lg:block absolute right-8 top-5 -rotate-180' src={arrow} alt="" />
                </div>
                <div>
                    <form onSubmit={handleSignUp} className="flex flex-col gap-4 p-2">
                        <div className="form-control">
                            <input name='name' type="text" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <input name='url' type="text" placeholder="Photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                            <p onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 bottom-3'><FaEye /></p>
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn bg-blue-500 text-white">Sign Up</button>
                        </div>
                        <div className="text-white divider text-sm">Or</div>
                        <div className="form-control">
                            <button onClick={handleGoogleSignIn} className="btn bg-white text-[#f9ae3f]"><FcGoogle className='text-xl'></FcGoogle>Sign Up with Google</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='hidden md:block'>
                <img src={signupPic} alt="" />
            </div>
        </div>

    );
};

export default SignUp;