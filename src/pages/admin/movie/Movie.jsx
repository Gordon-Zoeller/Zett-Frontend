import { useContext } from "react";
import { UserContext } from "../../../context/Context";

export default function Movie() {
    const {user} = useContext(UserContext);
    return (
        <>
            {
                user?.role === "admin" &&
                <form>
                    <p>movie form</p>
                </form>
            }
        </>
    );
};