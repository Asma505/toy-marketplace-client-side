import useTitle from "../../hooks/useTitle";
import baseball from '../../assets/baseball.jpg';
import bowling from '../../assets/bowling.jpg';
import golf from '../../assets/golf.png';
import basketball from '../../assets/basketball.png';
import boxing from '../../assets/boxing.png';
import golfplay from '../../assets/golfplay.png';
import archery from '../../assets/archery.png';



const Home = () => {
    useTitle('Home');
    return (
        <div>
            <div className="bg-yellow-200 mb-16">
                <div className="w-11/12 mx-auto md:flex md:justify-center md:items-center md:gap-16">
                    <div className="md:w-1/2">
                        <img className="mb-5" src={golf} alt="" />
                    </div>
                    <div className="md:w-1/2 text-center pb-3">
                        <h3 className="text-3xl text-stone-900 font-bold leading-normal">Play and Have Fun with the Big Collection of Sports Toys</h3>
                    </div>
                </div>
            </div>
            <h3 className="text-5xl text-yellow-200 text-center mb-10">Gallery</h3>
            <div className="w-10/12 mx-auto grid grid-cols-3 gap-3 outline outline-offset-4 outline-4 outline-yellow-200 rounded mb-16">
                <div>
                    <img src={bowling} alt="" />
                </div>
                <div>
                    <img src={baseball} alt="" />
                </div>
                <div>
                    <img src={basketball} alt="" />
                </div>
                <div>
                    <img src={boxing} alt="" />
                </div>
                <div>
                    <img src={golfplay} alt="" />
                </div>
                <div>
                    <img src={archery} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Home;