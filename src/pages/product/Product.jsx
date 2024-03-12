import { useContext } from "react";
import { ProductContext } from "../../context/Context";

export default function Product() {
    const {product} = useContext(ProductContext);
    return (
        <>
            <div>
                <p>hello world</p>
            </div>
        </>
    );
};