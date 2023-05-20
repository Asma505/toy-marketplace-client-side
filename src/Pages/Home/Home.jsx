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
import { useLoaderData } from "react-router-dom";
import Card from "../../Shared/Card/Card";




const Home = () => {

    const products = useLoaderData();    

    const outdoor = products.filter(p => p.sub_category === "Outdoor Sports");

    const indoor = products.filter(ap => ap.sub_category === "Indoor Sports");
    
    const indoorOutdoor = products.filter(ap => ap.sub_category === "Indoor and Outdoor Sports");
    
    const productsTabOne = outdoor.map(product=> <Card key={product._id} product={product}></Card>);
    
    const productsTabTwo = indoor.map(product=> <Card key={product._id} product={product}></Card>);
    
    const productsTabThree = indoorOutdoor.map(product=> <Card key={product._id} product={product}></Card>);

    

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
            <h3 className="text-5xl text-yellow-200 text-center mb-10">Shop By Category</h3>
            <div className="w-10/12 mx-auto bg-yellow-200 mb-5 rounded-lg">
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
        </div>
    );
};

export default Home;