import { useEffect, useState } from "react";
import { UserContext } from "./Context";

export default function UserContainer({children}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if(token) {
            async function verify() {
                try {
                    const response = await fetch(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_VERIFY}`, {method: "GET", headers: {token: token}});
                    if(response.ok) {
                        const data = await response.json();
                        if(data.success) {
                            setUser(data.data);
                        };
                    }
                } catch (error) {
                    //
                }
            };
            verify();
        };
    }, []);
    return (
        <>
            <UserContext.Provider value={{
                user, setUser,
            }}>
                {children}
            </UserContext.Provider>
        </>
    );
};