import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Continue from "../components/Continue";
import LoginInformation from "../components/LoginInformation";
import { Context } from "../context/Context";

export default function Login() {
    const {setUser} = useContext(Context);
    const navigate = useNavigate();
    async function login(e) {
        e.preventDefault();
        const user = {
            email: e.target.email.value,
            password: e.target.password.value,
        };
        try {
            const response = await fetch(`${import.meta.env.VITE_LOGIN}`, {method: "POST",headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)});
            if(response.ok) {
                const token = response.headers.get("token");
                if(token) {
                    sessionStorage.setItem("token", token);
                    const data = await response.json();
                    if(data.success) {
                        setUser(data.data);
                        navigate("/profile");
                    };
                };
            };
        } catch (error) {
            //
        }
    };
    return (
        <>
            <form onSubmit={login}>
                <LoginInformation/>
                <Continue/>
            </form>
        </>
    );
};