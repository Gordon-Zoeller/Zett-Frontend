import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import UploadBtn from "../../../components/ui/btn/UploadBtn";
import Pages from "../../../components/ui/input/Pages";
import Edition from "../../../components/Edition";
import Publisher from "../../../components/ui/input/Publisher";
import ISBN from "../../../components/ui/input/ISBN";
import ProductInformation from "../../../components/ProductInformation";
import { uploadProduct } from "../../../services/api/upload/uploadProduct";

export default function Book() {
    const {user} = useContext(UserContext);
    return (
        <>
            {
                user?.role === "admin" &&
                <form onSubmit={(e) => uploadProduct(e, "book")}>
                    <div>
                        <label htmlFor="author">Author</label>
                        <input type="text" name="author" id="author" />
                    </div>
                    <ProductInformation/>
                    <div>
                        <h6>Hardcover</h6>
                    </div>
                    <Edition>
                        <Pages/>
                        <Publisher/>
                        <ISBN/>
                    </Edition>
                    <div>
                        <h6>Paperback</h6>
                    </div>
                    <Edition>
                        <Pages/>
                        <Publisher/>
                        <ISBN/>
                    </Edition>
                    <UploadBtn/>
                </form>
            }
        </>
    );
};