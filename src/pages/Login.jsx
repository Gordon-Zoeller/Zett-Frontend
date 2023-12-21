import Continue from "../components/Continue";
import Email from "../components/Email";
import Password from "../components/Password";

export default function Login() {
    return (
        <>
            <form>
                <Email/>
                <Password/>
                <Continue/>
            </form>
        </>
    );
};