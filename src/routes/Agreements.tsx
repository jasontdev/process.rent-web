import { AuthContext } from "../context/AuthContext"
import {useContext} from "react";
import "./Agreements.css";

export default function Agreements() {
    const { clientPrincipal } = useContext(AuthContext);

    return (
        <div className="agreements-container">
            <h1>Agreements</h1>
            <div>{clientPrincipal?.userId}</div>
        </div>
    );
}