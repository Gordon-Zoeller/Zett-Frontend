import { useEffect } from "react";
import { verify } from "../services/api/user/verify";

export function useUser(setUser) {
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if(token) verify(setUser, token);
    }, []);
};