import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
// import logonew from '../../assets/logo3.png';

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    const menues = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to=''>All Toys</Link></li>
        <li><Link to=''>Blogs</Link></li>
        {user &&
            <><li><Link to=''>My Toys</Link></li>
                <li><Link to=''>Add A Toy</Link></li>
            </>}
    </>


    return (
        <div>
            <div className='bg-black py-1'>
                <img className='w-28 mx-auto' src={logo} alt="" />
            </div>
            <div className='bg-yellow-200'>
                <div className="navbar md:w-10/12 md:mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                {menues}
                            </ul>
                        </div>
                        <a className="normal-case text-xl font-bold">Sports Toys</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menues}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {user ? <><img className='w-16 pr-3' src={user.photoURL} alt="" />

                            <button className="btn"><Link onClick={handleLogOut}>Logout</Link></button></> :
                            <button className="btn"><Link to='/login'>Login</Link></button>}
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Navbar;