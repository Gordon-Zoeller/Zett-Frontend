import { useContext } from "react";
import { Context } from "../context/Context";

export default function Profile() {
    const {user} = useContext(Context);
    return (
        <>
            <h2>{user?.firstName}</h2>
        </>
    );
};