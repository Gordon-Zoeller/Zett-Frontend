import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/Context";
import Price from "./ui/render/Price";

export default function EditionCard({children, product, price, edition}) {
    const {setProduct} = useContext(ProductContext);
    return (
        <>
            <Link to={`/${product.category}/product/${product.title}`} state={edition} onClick={() => setProduct(product)}>
                {children}
                <Price price={price}/>
            </Link>
        </>
    );
};