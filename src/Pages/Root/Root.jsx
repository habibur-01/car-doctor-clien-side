import { Outlet } from "react-router-dom";
import Navbar from "../../SharedComponent/Navbar/Navbar";
import Footer from "../../SharedComponent/Footer/Footer";

const Root = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="container mx-auto">

                <Outlet></Outlet>

            </div>
            
            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Root;