import Continue from "../components/Continue";
import Email from "../components/Email";
import FirstName from "../components/FirstName";
import LastName from "../components/LastName";
import Password from "../components/Password";
import ReEnter from "../components/ReEnter";

export default function Register() {
    return (
        <>
            <form>
                <FirstName/>
                <LastName/>
                <Email/>
                <Password/>
                <ReEnter/>
                <Continue/>
            </form>
        </>
    );
};