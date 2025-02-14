import React from "react";
import "./Button.css";

type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
    transparentBackground?: boolean;
}

export default function Button({children, onClick, transparentBackground}: ButtonProps) {
    let buttonStyle = "button";

    if(transparentBackground) {
        buttonStyle += " button-transparent-background";
    }

    return (
        <button className={buttonStyle} onClick={() => {if(onClick) { onClick()}}}>{children}</button>
    );
}