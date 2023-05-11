import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBAr from "../Pages/Shared/NavBar/NavBAr";


const Main = () => {
    return (
        <div>
             <NavBAr></NavBAr>
             <Outlet></Outlet>
             <Footer></Footer>
        </div>
    );
};

export default Main;