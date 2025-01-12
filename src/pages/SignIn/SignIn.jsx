import { Link, useNavigate } from 'react-router-dom';
import sunflower from '../../assets/sunflower.gif';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import loginPic from '../../assets/login2.svg'
import Swal from 'sweetalert2';

const SignIn = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signInUser(email, password)
            .then(result => {

                e.target.reset();
                navigate('/addVisa');
            })
            .catch(error => {
                Swal.fire("Error", error.message);
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                // console.log(result.user);
                navigate('/');
            })
            .catch(error =>
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                })
            )
    }

return (
    <div className='md:flex md:gap-20 w-10/12 mx-auto my-20'>
        <div>
            <img className='hidden lg:block' src={loginPic} alt="login photo" />
        </div>
        <div className='w-full'>
            <div className='text-center items-center mb-20'>
                <div className='flex items-center justify-center'>
                    <img className='w-12' src={sunflower} alt="" />
                    <h1 className='text-2xl md:text-2xl lg:text-5xl text-[#f9ae3f]'>GoVisa - Sign In</h1>
                </div>
                <div>
                    <h3 className='text-sm md:text-lg text-slate-500 my-3'>Don't have an account? <Link className='text-[#f9ae3f]' to='/signup'>Sign Up</Link></h3>
                </div>
            </div>
            <div className="">
                <div className="">
                    <button onClick={handleGoogleSignIn} className='w-full flex justify-center items-center border border-[#f9ae3f] pr-4 lg:px-20 rounded-3xl'>
                        <svg width="52" height="52" role="img"><title>Google's Logo</title><g id="Google-Button" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><rect x="0" y="0" width="52" height="52" rx="2"></rect><g id="logo_googleg_48dp" transform="translate(13.65, 13.65) scale(1.4300000000000002)"><path d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z" id="Shape" fill="#4285F4"></path><path d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z" id="Shape" fill="#34A853"></path><path d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z" id="Shape" fill="#FBBC05"></path><path d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z" id="Shape" fill="#EA4335"></path><path d="M0,0 L18,0 L18,18 L0,18 L0,0 Z" id="Shape"></path></g></g></svg>
                        Sign In with Google</button>
                </div>
                <div className="text-slate-400 divider text-sm">Or with email and password</div>
                <div className="">
                    <div>
                        <form onSubmit={handleSignin}>
                            <div className="form-control border-b-2 border-[#f9ae3f]">
                                <input name='email' type="email" placeholder="email" className="input" required />
                            </div>
                            <div className="form-control ">
                                <input name='password' type="password" placeholder="password" className="input rounded-none border-b-2 border-b-[#f9ae3f] focus:border-transparent focus:ring-transparent" required />
                            </div>
                            {/* <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password </span>
                        </label>
                        <input name='password' type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                        <p onClick={() => setShowPassword(!showPassword)} className='btn btn-xs absolute right-4 bottom-3'><FaEye /></p>
                    </div> */}
                            <div className="form-control mt-20">
                                <button className="btn bg-[#f9ae3f] rounded-3xl">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
);
};

export default SignIn;