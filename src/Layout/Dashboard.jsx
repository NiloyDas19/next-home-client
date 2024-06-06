import { FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { ImSpoonKnife } from "react-icons/im";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { RiFileListFill } from "react-icons/ri";
import NavBar from "../Pages/Shared/NavBar/NavBar";
import Footer from "../Pages/Shared/Footer/Footer";

const Dashboard = () => {

    // TODO : get isAdmin value from database
    const isAdmin = true;

    return (
        <div>
            <NavBar></NavBar>
            <div className="flex gap-5 flex-col md:flex-row">
                {/* Dashboard Sidebar */}
                <div className="w-64 min-h-screen">
                    <ul className="menu w-full p-2 space-y-2 flex md:flex-col flex-row gap-2">
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <NavLink to="/dashboard/myProfile" className="border-2 border-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white w-full">
                                            <FaHome />
                                            My Profile
                                        </NavLink>
                                    </li>
                                    <li className="border-2 border-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white">
                                        <NavLink to="/dashboard/wishList" className="w-full">
                                            <ImSpoonKnife />
                                            WishList
                                        </NavLink>
                                    </li>
                                    <li className="border-2 border-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white">
                                        <NavLink to="/dashboard/propertyBought" className="w-full">
                                            <HiOutlineClipboardDocumentList />
                                            Property bought
                                        </NavLink>
                                    </li>
                                    <li className="border-2 border-orange-500 rounded-2xl hover:bg-orange-500 hover:text-white">
                                        <NavLink to="/dashboard/myReviews" className="w-full">
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