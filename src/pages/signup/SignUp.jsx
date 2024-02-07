import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContinueBtn from "../../components/ui/btn/ContinueBtn";
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
                <ContinueBtn/>
            </form>
        </>
    );
};