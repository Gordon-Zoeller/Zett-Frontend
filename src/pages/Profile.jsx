import { useContext } from "react";
import { Context } from "../context/Context";
import FirstName from "../components/FirstName";
import LastName from "../components/LastName";
import Image from "../components/Image";
import Upload from "../components/Upload";

export default function Profile() {
    const {user} = useContext(Context);
    return (
        <>
            <h2>{user?.firstName}</h2>
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" />
                </div>
                <FirstName/>
                <LastName/>
                <div>
                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" id="year" />
                </div>
                <div>
                    <label htmlFor="publisher">Publisher</label>
                    <input type="text" name="publisher" id="publisher" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="number" name="price" id="price" />
                </div>
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <input type="text" name="isbn" id="isbn" />
                </div>
                <Image/>
                <Upload/>
            </form>
        </>
    );
};