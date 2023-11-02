
import About from "./About/About";
import Banner from "./Banner/Banner";
import Popularproduct from "./PopularItem/Popularproduct";
import Service from "./Service/Service";


const Home = () => {
    return (
        <div className="container mx-auto">

            <div>
                <Banner></Banner>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Service></Service>
            </div>
            <div>
                <Popularproduct></Popularproduct>
            </div>

        </div>
    );
};

export default Home;