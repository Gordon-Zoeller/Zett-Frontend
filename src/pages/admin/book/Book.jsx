import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import UploadBtn from "../../../components/UploadBtn";
import Title from "../../../components/ui/input/Title";
import Author from "../../../components/ui/input/Author";
import Genre from "../../../components/ui/input/Genre";
import Description from "../../../components/ui/input/Description";
import Pages from "../../../components/ui/input/Pages";
import Language from "../../../components/ui/input/Language";
import Edition from "../../../components/Edition";

export default function Book() {
    const {user} = useContext(UserContext);
    async function uploadBook(e) {
        e.preventDefault();
        try {
            const book = new FormData(e.target);
            const token = sessionStorage.getItem("token");
            if(token) {
                const response = await fetch(`${import.meta.env.VITE_UPLOAD_BOOK}`, {method: "POST", headers: {token: token}, body: book});
                if(response.ok) {
                    const data = await response.json();
                    if(data.success) {
                        console.log(data.message);
                    };
                };
            };
        } catch (error) {
            //
        };
    };
    return (
        <>
            {
                user?.role === "admin" &&
                <form onSubmit={uploadBook}>
                    <Title/>
                    <Author/>
                    <Genre/>
                    <Language/>
                    <Description/>
                    <div>
                        <h6>Hardcover</h6>
                    </div>
                    <Pages/>
                    <Edition/>
                    <div>
                        <h6>Paperback</h6>
                    </div>
                    <Pages/>
                    <Edition/>
                    <UploadBtn/>
                </form>
            }
        </>
    );
};