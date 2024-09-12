import { createContext, useContext, useEffect, useState } from "react";

type ClientPrincipal = {
    identityProvider: string;
    userId: string;
    userDetails: string;
    userRoles: string[];
}

type AuthContextProps = {
    clientPrincipal: ClientPrincipal | null
    isAuthenticating: boolean
}

const AuthContext = createContext<AuthContextProps>({ clientPrincipal: null, isAuthenticating: true });

function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({ children }: { children: React.ReactNode }) {
    const [clientPrincipal, setClientPrincipal] = useState<ClientPrincipal | null>(null);
    const [isAuthenticating, setIsAuthenticating] = useState(true);

    useEffect(() => {
        const fetchClientPrincipal = async () => {
            const response = await fetch('/.auth/me');
            const payload = await response.json();
            setClientPrincipal(payload.clientPrincipal);
            setIsAuthenticating(false);
        }

        fetchClientPrincipal().catch(error => console.log(error));
    }, [])

    return <AuthContext.Provider value={ { clientPrincipal, isAuthenticating } }> { children } </AuthContext.Provider>
}

export { AuthContext, AuthProvider, useAuth };
export type { ClientPrincipal };

