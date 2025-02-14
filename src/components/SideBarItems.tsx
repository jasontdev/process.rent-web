import React from "react";
import "./SideBarItems.css";

export type SideBarItemsProps = {
    children: React.ReactNode;
}

export default function SideBarItems({children}: SideBarItemsProps) {
    return <div className="sidebar-items">{children}</div>
}