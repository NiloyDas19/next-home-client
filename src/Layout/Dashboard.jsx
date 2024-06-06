import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiFileListFill } from "react-icons/ri";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";
import '../Pages/Shared/NavBar/NavBar.css'

const Dashboard = () => {

    // TODO : get isAdmin value from database
    const isAdmin = true;

    return (
        <div>
            <NavBar></NavBar>
            <div id="dashboard" className="flex gap-5 flex-col md:flex-row">
                {/* Dashboard Sidebar */}
                <div className="md:w-64 min-h-screen w-[80%] mx-auto ">
                    <ul className="menu w-full p-2 space-y-2">
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink
                                            to="/dashboard/myProfile"
                                            className="border-2 border-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white w-full"
                                        >
                                            <FaHome />
                                            My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/wishList"
                                            className="border-2 border-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white w-full">
                                            <ImSpoonKnife />
                                            WishList
                                        </NavLink>
                                    </li>
                                    <li >
                                        <NavLink to="/dashboard/propertyBought"
                                            className="border-2 border-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white w-full"
                                        >
                                            <HiOutlineClipboardDocumentList />
                                            Property bought
                                        </NavLink>
                                    </li>
                                    <li >
                                        <NavLink to="/dashboard/myReviews"
                                            className="border-2 border-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white w-full"
                                        >
                                            <RiFileListFill />
                                            My reviews
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>

                                </>
                        }

                    </ul>
                </div>

                {/* Dashboard Content */}
                <div className="flex-1 p-8">
                    <Outlet></Outlet>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;