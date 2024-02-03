import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Continue from "../components/Continue";
import SignInInformation from "../components/SignInInformation";
import { UserContext } from "../context/Context";

export default function SignIn() {
    const {setUser} = useContext(UserContext);
    const navigate = useNavigate();
    async function signin(e) {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        try {
            const response = await fetch(`${import.meta.env.VITE_SIGNIN}`, {method: "POST",headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)});
            if(response.ok) {
                const token = response.headers.get("token");
                if(token) {
                    sessionStorage.setItem("token", token);
                    const data = await response.json();
                    if(data.success) {
                        setUser(data.data);
                        navigate("/");
                    };
                };
            };
        } catch (error) {
            //
        }
    };
    return (
        <>
            <form onSubmit={signin}>
                <SignInInformation/>
                <Continue/>
            </form>
        </>
    );
};