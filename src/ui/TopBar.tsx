import "./TopBar.css";
import Button from "./Button.tsx";

export default function TopBar() {
    return (
        <div className="topbar-container">
            <span className="topbar-brand">process.rent</span>
            <div>
                <Button>Logout</Button>
            </div>
        </div>
    )
}