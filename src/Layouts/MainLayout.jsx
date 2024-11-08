import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div className=" container px-5  mx-auto">
            <Toaster/>
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