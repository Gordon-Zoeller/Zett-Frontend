import { useState } from "react";
import { UserContext } from "./Context";
import { useUser } from "../hooks/useUser";

export default function UserContainer({children}) {
    const [user, setUser] = useState(null);
    const handleVerify = useUser(setUser);
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