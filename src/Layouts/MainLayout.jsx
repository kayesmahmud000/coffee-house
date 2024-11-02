import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className=" container  mx-auto">
            {/* Navbar */}
           <div className="h-16">
           <Navbar></Navbar>
           </div>
            {/* Dynamic Layout */}
            <div className=" lg:min-h-[700px] py-10">
                <Outlet></Outlet>

            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;