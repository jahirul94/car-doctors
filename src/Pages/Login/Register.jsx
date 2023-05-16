import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
    const handleRegister = event => {
        event.preventDefault()   ;
        const form = event.target ;
        // const name = form.name.value ;
        const email = form.email.value ;
        const password = form.password.value;
        createUser( email , password )
        .then(result => {
            const user = result.user;
            form.reset();
        })
        .catch( err => {
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
               <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <h1 className="text-3xl font-bold mb-4 text-center">Sign Up</h1>
                        <label className="label">
                        <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                        <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Sign Up" />
                    </div>
                    <div className='text-center mt-4'>
                         <h5>Already Have an account ? <Link to='/login' className='text-orange-600 font-bold'>Login</Link></h5>
                    </div>
               </form>
            </div>
        </div>
        </div>
  </div>
    );
};

export default Register;