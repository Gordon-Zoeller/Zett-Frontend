import { useContext } from "react";
import { UserContext } from "../context/Context";
import CombinedName from "../components/CombinedName";
import Image from "../components/Image";
import Upload from "../components/Upload";

export default function Profile() {
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
            <h2>{user?.firstName}</h2>
            <div>
                {
                    user?.role === "admin"
                    &&
                    <form onSubmit={uploadBook}>
                        <div>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" />
                        </div>
                        <CombinedName/>
                        <div>
                            <label htmlFor="year">Year</label>
                            <input type="number" name="year" id="year" />
                        </div>
                        <div>
                            <label htmlFor="publisher">Publisher</label>
                            <input type="text" name="publisher" id="publisher" />
                        </div>
                        <div>
                            <label htmlFor="genre">Genre</label>
                            <input type="text" name="genre" id="genre" />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <textarea name="description" id="description" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <label htmlFor="price">Price</label>
                            <input type="number" step="any" name="price" id="price" />
                        </div>
                        <div>
                            <label htmlFor="isbn">ISBN</label>
                            <input type="text" name="isbn" id="isbn" />
                        </div>
                        <Image/>
                        <Upload/>
                    </form>
                }
            </div>
        </>
    );
};