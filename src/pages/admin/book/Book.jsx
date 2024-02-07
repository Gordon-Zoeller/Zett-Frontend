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
import { uploadBook } from "../../../services/api/books/UploadBook";

export default function Book() {
    const {user} = useContext(UserContext);
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