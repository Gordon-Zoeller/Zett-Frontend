import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Director from "./ui/render/Director";
import Price from "./ui/render/Price";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/Context";

export default function MovieCard({product}) {
    const {setProduct} = useContext(ProductContext);
    return (
        <>
            <div>
                <Link to={`/movies/product/${product.title}`} onClick={() => setProduct(product)}>
                    <Cover cover={product?.edition?.dvd?.image?.thumbnail}/>
                </Link>
                <Link to={`/movies/product/${product.title}`} onClick={() => setProduct(product)}>
                    <Title title={product.title}/>
                </Link>
                <Director director={product.director}/>
            </div>
            <div>
                <p>DVD</p>
            </div>
            <Price price={product?.edition?.dvd?.price}/>
            <hr />
            <div>
                <p>Blue-ray</p>
            </div>
            <Price price={product?.edition?.blueRay?.price}/>
        </>
    );
};