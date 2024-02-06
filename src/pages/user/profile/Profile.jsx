import { useContext } from "react";
import { UserContext } from "../../../context/Context";

export default function Profile() {
    const {user} = useContext(UserContext);
    return (
        <>
            <h2>{user?.firstName}</h2>
        </>
    );
};