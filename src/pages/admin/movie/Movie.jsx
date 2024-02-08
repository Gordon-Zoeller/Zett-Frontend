import { useContext } from "react";
import Edition from "../../../components/Edition";
import ProductInformation from "../../../components/ProductInformation";
import { UserContext } from "../../../context/Context";

export default function Movie() {
    const {user} = useContext(UserContext);
    return (
        <>
            {
                user?.role === "admin" &&
                <form>
                    <div>
                        <label htmlFor="director">Director</label>
                        <input type="text" name="director" id="director" />
                    </div>
                    <div>
                        <label htmlFor="actors">Actors</label>
                        <textarea name="actors" id="actors" cols="30" rows="10"></textarea>
                    </div>
                    <ProductInformation>
                        <div>
                            <label htmlFor="subtitles">Subtitles</label>
                            <input type="text" name="subtitles" id="subtitles" />
                        </div>
                        <div>
                            <label htmlFor="runTime">Run time</label>
                            <input type="number" name="runTime" id="runTime" />
                        </div>
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
                </form>
            }
        </>
    );
};