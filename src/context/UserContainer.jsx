import { useEffect, useState } from "react";
import { UserContext } from "./Context";
import { verify } from "../services/api/user/Verify";

export default function UserContainer({children}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if(token) {
            verify(setUser, token);
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