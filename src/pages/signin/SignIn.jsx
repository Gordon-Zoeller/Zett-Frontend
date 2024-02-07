import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Continue from "../../components/Continue";
import SignInInformation from "../../components/SignInInformation";
import { UserContext } from "../../context/Context";
import { signin } from "../../services/api/user/SignIn";

export default function SignIn() {
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    return (
        <>
            <form onSubmit={(e) => signin(e, setUser, navigate)}>
                <SignInInformation/>
                <Continue/>
            </form>
        </>
    );
};