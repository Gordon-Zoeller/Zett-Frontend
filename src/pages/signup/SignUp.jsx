import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ContinueBtn from "../../components/ui/btn/ContinueBtn";
import { UserContext } from "../../context/Context";
import SignInInput from "../../components/SignInInput";
import { signup } from "../../services/api/user/SignUp";

export default function SignUp() {
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <>
            <form onSubmit={(e) => signup(e, setUser, navigate)}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" id="firstName" />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" id="lastName" />
                </div>
                <SignInInput/>
                <div>
                    <label htmlFor="re-enter">Re-enter password</label>
                    <input type="password" name="reEnter" id="reEnter" />
                </div>
                <ContinueBtn/>
            </form>
        </>
    );
};