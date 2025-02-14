import "./SideBar.css";
import React from "react";
import Button from "./Button.tsx";

type SideBarProps = {
    children: React.ReactNode;
    show: boolean;
    handleHideShowButtonClick: () => void;
}

export default function SideBar({children, show, handleHideShowButtonClick}: SideBarProps) {
    if(show) {
        return (
            <div className="sidebar-container">
                <div>
                    <Button onClick={() => {
                        handleHideShowButtonClick()
                    }}>Show
                    </Button>
                    {children}
                </div>
                <div>
                    <a href="#">Settings</a>
                </div>
            </div>
        );
    } else {
        return (
            <div className="sidebar-container sidebar-container-hidden">
                <Button onClick={() => {handleHideShowButtonClick()}}>Hide</Button>
                {children}
            </div>
        );
    }
}