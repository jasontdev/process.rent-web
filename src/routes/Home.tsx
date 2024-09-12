import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Home() {
    const { clientPrincipal } = useContext(AuthContext);

    return (
        <div>
            {clientPrincipal?.userId ? <div>{clientPrincipal.userId}</div> : <div>No id</div>}
            <a href="/.auth/logout">Log out</a>
        </div>
    );
}