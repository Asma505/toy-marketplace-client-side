import useTitle from "../../hooks/useTitle";
import baseball from '../../assets/baseball.jpg';
import bowling from '../../assets/bowling.jpg';
import golf from '../../assets/golf.png';
import basketball from '../../assets/basketball.png';
import boxing from '../../assets/boxing.png';
import golfplay from '../../assets/golfplay.png';
import archery from '../../assets/archery.png';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link, useLoaderData } from "react-router-dom";
import Card from "../../Shared/Card/Card";





const Home = () => {

    const products = useLoaderData();

    const outdoor = products.filter(p => p.sub_category === "Outdoor Sports");

    const indoor = products.filter(ap => ap.sub_category === "Indoor Sports");

    const indoorOutdoor = products.filter(ap => ap.sub_category === "Indoor and Outdoor Sports");

    const productsTabOne = outdoor.map(product => <Card key={product._id} product={product}></Card>);

    const productsTabTwo = indoor.map(product => <Card key={product._id} product={product}></Card>);

    const productsTabThree = indoorOutdoor.map(product => <Card key={product._id} product={product}></Card>);



    useTitle('Home');
    return (
        <div>
            <div className="bg-yellow-200 mb-16" data-aos="fade-right" data-aos-duration="3000">
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
            <h3 className="text-5xl text-yellow-200 text-center mb-10">Shop By Category</h3>
            <div className="w-10/12 mx-auto bg-yellow-200 mb-28 rounded-lg">
                <div className="w-8/12 mx-auto py-5">
                    <Tabs>
                        <TabList>
                            <Tab>Outdoor Sports</Tab>
                            <Tab>Indoor Sports</Tab>
                            <Tab>Outdoor and Indoor Sports</Tab>
                        </TabList>

                        <TabPanel>
                            <h2>{productsTabOne}</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>{productsTabTwo}</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>{productsTabThree}</h2>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
            <h3 className="text-5xl text-yellow-200 text-center mb-10">Read Our Latest Blog Posts</h3>
            <div className="w-3/4 mx-auto h-96 rounded-lg mb-16">
                <div className="hero min-h-full rounded-lg" style={{ backgroundImage: `url("https://i.ibb.co/c3GXM6k/blog.png")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold text-white">Click The Button To Read Our Latest Blog Post</h1>
                            <Link to='/blog'><button className="btn btn-primary">Our Blog</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className="text-5xl text-yellow-200 text-center mb-10">Be a Seller</h3>
            <div className="w-11/12 mx-auto mb-16">
                <div className="card lg:card-side shadow-xl w-11/12 mx-auto bg-yellow-200">
                    <figure><img src="https://i.ibb.co/gMKXyTP/240-2403197-ico-download-seller-image-seller-icon-png.png" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Sell Our Toys</h2>
                        <p className="text-xl">Sell our toys and earn a good amount of profit.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Enroll</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;