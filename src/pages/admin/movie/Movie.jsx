import { useContext, useState } from "react";
import Edition from "../../../components/Edition";
import ProductInformation from "../../../components/ProductInformation";
import { UserContext } from "../../../context/Context";
import { FaMinus, FaPlus } from "react-icons/fa";
import UploadBtn from "../../../components/ui/btn/UploadBtn";
import RunTime from "../../../components/ui/input/RunTime";
import { plus } from "../../../helpers/Plus";
import { minus } from "../../../helpers/Minus";
import { uploadProduct } from "../../../services/api/upload/uploadProduct";

export default function Movie() {
    const [actors, setActors] = useState([]);
    const {user} = useContext(UserContext);
    return (
        <>
            {
                user?.role === "admin" &&
                <form onSubmit={(e) => uploadProduct(e, "movie")}>
                    <div>
                        <label htmlFor="director">Director</label>
                        <input type="text" name="director" id="director" />
                    </div>
                    <div>
                        <label htmlFor="actor">Actor</label>
                        <input type="text" name="actor" id="actor" />
                        <button type="button" onClick={() => plus(actors, setActors)}>
                            <FaPlus className="icon"/>
                        </button>
                    </div>
                    {
                        actors.map((id, index) => {
                            return (
                                <>
                                    <div>
                                        <label htmlFor={`actor${index}`}>Actor</label>
                                        <input type="text" name={`actor${index}`} id={`actor${index}`} />
                                        <button type="button" onClick={() => minus(id, actors, setActors)}>
                                            <FaMinus className="icon"/>
                                        </button>
                                    </div>
                                </>
                            );
                        })
                    }
                    <ProductInformation>
                        <div>
                            <label htmlFor="subtitles">Subtitles</label>
                            <input type="text" name="subtitles" id="subtitles" />
                        </div>
                        <RunTime/>
                        <div>
                            <label htmlFor="mpaa">MPAA rating</label>
                            <input type="text" name="mpaa" id="mpaa" />
                        </div>
                        <div>
                            <label htmlFor="country">Country</label>
                            <input type="text" name="country" id="country" />
                        </div>
                        <div>
                            <label htmlFor="distributor">Distributor</label>
                            <input type="text" name="distributor" id="distributor" />
                        </div>
                    </ProductInformation>
                    <div>
                        <h6>DVD</h6>
                    </div>
                    <Edition/>
                    <div>
                        <h6>Blue-ray</h6>
                    </div>
                    <Edition/>
                    <UploadBtn/>
                </form>
            }
        </>
    );
};