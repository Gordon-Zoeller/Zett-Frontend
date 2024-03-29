import { useContext } from "react";
import { UserContext } from "../../../context/Context";
import UploadBtn from "../../../components/ui/btn/UploadBtn";
import Pages from "../../../components/ui/input/Pages";
import EditionInput from "../../../components/EditionInput";
import Publisher from "../../../components/ui/input/Publisher";
import ISBN from "../../../components/ui/input/ISBN";
import ProductInput from "../../../components/ProductInput";
import { uploadProduct } from "../../../services/api/upload/uploadProduct";
import Paperback from "../../../components/ui/render/Paperback";
import Hardcover from "../../../components/ui/render/Hardcover";

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
                    <ProductInput/>
                    <Hardcover/>
                    <EditionInput>
                        <Pages/>
                        <Publisher/>
                        <ISBN/>
                    </EditionInput>
                    <Paperback/>
                    <EditionInput>
                        <Pages/>
                        <Publisher/>
                        <ISBN/>
                    </EditionInput>
                    <UploadBtn/>
                </form>
            }
        </>
    );
};