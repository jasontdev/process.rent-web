import { useEffect, useState } from "react";
import Login from "./Login";
import ClientPrincipal from "./ClientPrincipal";

function App() {
  const [clientPrincipal, setClientPrincipal] = useState<ClientPrincipal | null>(null);

  useEffect(() => {
    const fetchClientPrincipal = async () => {
      const response = await fetch('/.auth/me');
      const payload = await response.json();

      setClientPrincipal(payload.clientPrincipal);
    }

    fetchClientPrincipal().catch((error) => console.log(error))
  }, []);

  return (
    <div>
      {clientPrincipal !== null ? <div><a href="/.auth/logout">Logout</a></div> : <Login />}
    </div>
  );
}

export default App;
