import Price from "./ui/render/Price";
import Author from "./ui/render/Author";
import Artist from "./ui/render/Artist";
import Director from "./ui/render/Director";
import Hardcover from "./ui/render/Hardcover";
import Paperback from "./ui/render/Paperback";
import DVD from "./ui/render/DVD";
import BlueRay from "./ui/render/BlueRay";
import CD from "./ui/render/CD";
import Vinyl from "./ui/render/Vinyl";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/Context";

export default function ProductCard({product}) {
    const {setProduct} = useContext(ProductContext);
    return (
        <>
            <div>
                {
                    product.category === "books" &&
                    <>
                        <Author author={product.author}/>
                        <Link to={`/${product.category}/product/${product.title}`} state="one" onClick={() => setProduct(product)}>
                            <Hardcover/>
                            <Price price={product?.edition?.one?.price}/>
                        </Link>
                        <hr />
                        <Link to={`/${product.category}/product/${product.title}`} state="two" onClick={() => setProduct(product)}>
                            <Paperback/>
                            <Price price={product?.edition?.two?.price}/>
                        </Link>
                    </>
                }
                {
                    product.category === "movies" &&
                    <>
                        <Director director={product.director}/>
                        <Link to={`/${product.category}/product/${product.title}`} state="one" onClick={() => setProduct(product)}>
                            <DVD/>
                            <Price price={product?.edition?.one?.price}/>
                        </Link>
                        <hr />
                        <Link to={`/${product.category}/product/${product.title}`} state="two" onClick={() => setProduct(product)}>
                            <BlueRay/>
                            <Price price={product?.edition?.two?.price}/>
                        </Link>
                    </>
                }
                {
                    product.category === "albums" &&
                    <>
                        <Artist artist={product.artist}/>
                        <Link to={`/${product.category}/product/${product.title}`} state="one" onClick={() => setProduct(product)}>
                            <CD/>
                            <Price price={product?.edition?.one?.price}/>
                        </Link>
                        
                        <hr />
                        <Link to={`/${product.category}/product/${product.title}`} state="two" onClick={() => setProduct(product)}>
                            <Vinyl/>
                            <Price price={product?.edition?.two?.price}/>
                        </Link>
                    </>
                }
            </div>
        </>
    );
};