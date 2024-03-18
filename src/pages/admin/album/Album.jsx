import { useContext, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import EditionInput from "../../../components/EditionInput";
import ProductInformation from "../../../components/ProductInformation";
import RunTime from "../../../components/ui/input/RunTime";
import { UserContext } from "../../../context/Context";
import { plus } from "../../../helpers/Plus";
import { minus } from "../../../helpers/Minus";
import IMN from "../../../components/ui/input/IMN";
import UploadBtn from "../../../components/ui/btn/UploadBtn";
import { uploadProduct } from "../../../services/api/upload/uploadProduct";
import CD from "../../../components/ui/render/CD";
import Vinyl from "../../../components/ui/render/Vinyl";

export default function Album() {
    const [tracks, setTracks] = useState([]);
    const {user} = useContext(UserContext);
    return (
        <>
            {
                user?.role === "admin" &&
                <form onSubmit={(e) => uploadProduct(e, "album")}>
                    <div>
                        <label htmlFor="artist">Artist</label>
                        <input type="text" name="artist" id="artist" />
                    </div>
                    <ProductInformation>
                        <RunTime/>
                        <div>
                            <label htmlFor="label">Label</label>
                            <input type="text" name="label" id="label" />
                        </div>
                    </ProductInformation>
                    <div>
                        <label htmlFor="track">Track</label>
                        <input type="text" name="track" id="track" />
                        <button type="button" onClick={() => plus(tracks, setTracks)}>
                            <FaPlus className="icon"/>
                        </button>
                    </div>
                    {
                        tracks.map((id, index) => {
                            return (
                                <>
                                    <div>
                                        <label htmlFor={`track${index}`}>Track</label>
                                        <input type="text" name={`track${index}`} id={`track${index}`} />
                                        <button type="button" onClick={() => minus(id, tracks, setTracks)}>
                                            <FaMinus className="icons"/>
                                        </button>
                                    </div>
                                </>
                            );
                        })
                    }
                    <CD/>
                    <EditionInput>
                        <IMN/>
                    </EditionInput>
                    <Vinyl/>
                    <EditionInput>
                        <IMN/>
                    </EditionInput>
                    <UploadBtn/>
                </form>
            }
        </>
    );
};