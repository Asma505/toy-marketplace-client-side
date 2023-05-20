import useTitle from "../../hooks/useTitle";
import baseball from '../../assets/baseball.jpg';
import bowling from '../../assets/bowling.jpg';
import golf from '../../assets/golf.png';



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
        </div>
    );
};

export default Home;