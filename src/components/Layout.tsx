import './Layout.css'
import {Outlet} from "react-router-dom";
import SideBar from "../ui/SideBar.tsx";
import TopBar from "../ui/TopBar.tsx";
import {useState} from "react";
import SideBarItems from "./SideBarItems.tsx"

export default function Layout() {
    const [showSidebar, setShowSidebar] = useState(false);

    function toggleSidebar() {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className="layout-container">
            <TopBar/>
            <SideBar show={showSidebar} handleHideShowButtonClick={toggleSidebar}>
                <SideBarItems>
                    <a href="/">Agreements</a>
                    <a href="#">Payments</a>
                </SideBarItems>
            </SideBar>
            <div className="content-container">
                <Outlet/>
            </div>
        </div>
    )
}
