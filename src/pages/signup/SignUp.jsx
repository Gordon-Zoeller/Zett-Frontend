import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Continue from "../../components/Continue";
import ReEnter from "../../components/ui/input/ReEnter";
import { UserContext } from "../../context/Context";
import SignUpInformation from "../../components/SignUpInformation";
import { signup } from "../../services/api/user/SignUp";

export default function SignUp() {
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <>
            <form onSubmit={(e) => signup(e, setUser, navigate)}>
                <SignUpInformation/>
                <ReEnter/>
                <Continue/>
            </form>
        </>
    );
};