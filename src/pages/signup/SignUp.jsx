import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Continue from "../../components/Continue";
import ReEnter from "../../components/ui/input/ReEnter";
import { UserContext } from "../../context/Context";
import SignUpInformation from "../../components/SignUpInformation";

export default function SignUp() {
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    async function signup(e) {
        e.preventDefault();
        if(e.target.password.value === e.target.reEnter.value) {
            const user = {
                firstName: e.target.firstName.value,
                lastName: e.target.lastName.value,
                email: e.target.email.value,
                password: e.target.password.value,
            };
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_SIGNUP}`, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)});
                if(response.ok) {
                    const token = response.headers.get("token");
                    if(token) {
                        sessionStorage.setItem("token", token);
                        const data = await response.json();
                        if(data.success) {
                            setUser(data.data);
                            navigate("/user/profile");
                        };
                    };
                };
            } catch (error) {
                //
            };
        } else {
            //
        };
    };
    return (
        <>
            <form onSubmit={signup}>
                <SignUpInformation/>
                <ReEnter/>
                <Continue/>
            </form>
        </>
    );
};