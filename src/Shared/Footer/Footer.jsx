import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import logonew from '../../assets/logo3.png';

const Footer = () => {
    return (
        <div className='bg-yellow-200'>
            <div className='md:grid md:grid-cols-4 md:gap-3 w-10/12 mx-auto py-10'>
                <div className='text-black my-10 mb-3 col-span-2'>
                    <img className='w-16' src={logonew} alt="" />
                    <h3 className='text-3xl font-bold mb-3'>Sports Toys</h3>
                    <p className='text-xl font-bold mb-5'>We have a collection of<br /> Latest sports toys for kids</p>
                    <div className='flex gap-10'>
                        <p><Link to='https://twitter.com' target="_blank"><button><FaTwitter></FaTwitter></button></Link></p>
                        <p><Link to='https://www.facebook.com' target="_blank"><button><FaFacebookF></FaFacebookF></button></Link></p>
                        <p><Link to='https://www.instagram.com' target="_blank"><button><FaInstagram></FaInstagram></button></Link></p>
                    </div>
                </div>
                <div className='text-black my-10'>
                    <h3 className='text-xl font-bold mb-3'>Explore</h3>
                    <p><Link to='#'>About Company</Link></p>
                    <p><Link to='#'>Our Products</Link></p>
                    <p><Link to='#'>Become a Seller</Link></p>
                    <p><Link to='#'>New Toys</Link></p>                    

                </div>
                <div className='text-black my-10'>
                    <h3 className='text-xl font-bold mb-3'>Contact</h3>
                    <p className='mb-3'>Address: 16, Tejkunipara, Fun Shop, Shop# 50, Dhaka, 1216</p>
                    <p className='underline underline-offset-8 mb-3'>Phone: 02 9350801 / 017 11894777</p>
                    <p>Email: info@example.com</p>
                </div>
            </div>
            <p className='text-center text-black py-5'>©Copyright of this website is reserved</p>
        </div>
    );
};

export default Footer;