import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate() ;
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const { logInUser } = useContext(AuthContext);
    const handleLogin = event =>{
       event.preventDefault()   ;
       const form = event.target ;
       const email = form.email.value ;
       const password = form.password.value;
       logInUser( email , password )
       .then(result =>{
         const user = result.user ;
        //  form.reset();
        const loggedUser = {
            email : user.email 
        }
         fetch('http://localhost:5000/jwt' , {
             method:"POST",
             headers : {
                'content-type':'application/json'
             },
             body : JSON.stringify(loggedUser)
         })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            localStorage.setItem('car-doctor-token' , data.token )
             navigate(from , { replace : true })
          })

       })
       .catch(err =>{
         console.log(err.message);
       })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
            <div className="w-1/2 mr-8">
                <img src={img} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                   <form onSubmit={handleLogin}>
                        <div className="form-control">
                            <h1 className="text-3xl font-bold mb-4 text-center">Login</h1>
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                        </div>
                        <div className='text-center mt-4'>
                             <h5>New to Cars Doctors ? <Link to='/register' className='text-orange-600 font-bold'>Sign Up</Link></h5>
                        </div>
                   </form>
                </div>
            </div>
            </div>
      </div>
    );
};

export default Login;