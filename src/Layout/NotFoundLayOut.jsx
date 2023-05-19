import { Link } from "react-router-dom";
import notFound from '../assets/funny-png.png';

const NotFoundLayOut = () => {
    return (
        <div>

            <main className="h-screen w-full flex flex-col justify-center items-center bg-yellow-200">
                <img className="w-1/3" src={notFound} alt="" />
                <h1 className="text-9xl font-extrabold text-black tracking-widest">404</h1>
                <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 relative">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <a
                        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
                    >
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <Link to="/"><span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            Back to home
                        </span></Link>
                    </a>
                </button>
            </main>
        </div>
    );
};

export default NotFoundLayOut;