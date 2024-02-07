import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import UploadBtn from "../../../components/ui/btn/UploadBtn";
import Pages from "../../../components/ui/input/Pages";
import Edition from "../../../components/Edition";
import { uploadBook } from "../../../services/api/books/UploadBook";
import Publisher from "../../../components/ui/input/Publisher";
import ProductInformation from "../../../components/ProductInformation";

export default function Book() {
    const {user} = useContext(UserContext);
    return (
        <>
            {
                user?.role === "admin" &&
                <form onSubmit={uploadBook}>
                    <ProductInformation>
                        <div>
                            <label htmlFor="author">Author</label>
                            <input type="text" name="author" id="author" />
                        </div>
                    </ProductInformation>
                    <div>
                        <h6>Hardcover</h6>
                    </div>
                    <Pages/>
                    <Edition>
                        <Publisher/>
                    </Edition>
                    <div>
                        <h6>Paperback</h6>
                    </div>
                    <Pages/>
                    <Edition>
                        <Publisher/>
                    </Edition>
                    <UploadBtn/>
                </form>
            }
        </>
    );
};