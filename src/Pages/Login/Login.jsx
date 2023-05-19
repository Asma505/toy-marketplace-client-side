import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => { 
    const [error, setError] = useState('');   
    const {googleSignIn, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // For Google Sign in

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            navigate(from, {replace: true});                       
        })
        .catch(error => {
            console.log(error);
        })
    }    

    // For username and password Sign in

    const handleLogin = event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        form.reset('');
        
        console.log(email, password);

        setError('');

        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true});
        })
        .catch(error=>{
            console.log(error.message);
            setError(error.message);
        })
    }
    return (
        <div className='w-2/3 mx-auto my-28 py-10'>
            <h3 className='text-center text-3xl font-bold'>Please Login</h3>

            {/* For username and password Sign in */}
            
            <form onSubmit={handleLogin}>
                <div className='text-left w-1/2 mx-auto'>
                    <label>Email</label>
                    <input className='block w-full mx-auto mb-5 pl-1 border-2 border-yellow-500' type="email" name="email" id="" placeholder=' Your Email' required />


                    <label>Password</label>
                    <input className='block w-full mx-auto mb-5 pl-1 border-2 border-yellow-500' type="password" name="password" id="" placeholder=' Enter Password' required />
                </div>

                <p className='text-center text-red-600 my-3'>{error}</p>
                <div className='text-center'>
                    <button className='w-1/2 mx-auto bg-yellow-200 text-black py-2' type="submit" name='submit'>Login</button>
                </div>
            </form>

            {/* For Google Sign in */}

            <div className='text-center'>
                <button onClick={handleGoogleSignIn} className='bg-yellow-200 text-black py-2 w-1/2 mx-auto my-3'> Login with Google </button>
            </div>                      

            {/* For Register Link */}
            <div className='text-center my-3 font-bold'>
                <p>Do not Have an Account? <Link className='text-yellow-600' to="/register">Register</Link></p>
            </div>            
        </div>
    );
};

export default Login;