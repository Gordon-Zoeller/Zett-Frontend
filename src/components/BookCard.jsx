import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Author from "./ui/render/Author";
import Price from "./ui/render/Price";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/Context";

export default function BookCard({product}) {
    const {setProduct} = useContext(ProductContext);
    return (
        <>
            <div>
                <Link to={`/books/product/${product.title}`} onClick={() => setProduct(product)}>
                    <Cover cover={product?.edition?.hardcover?.image?.thumbnail}/>
                </Link>
                <Link to={`/books/product/${product.title}`} onClick={() => setProduct(product)}>
                    <Title title={product.title}/>
                </Link>
                <Author author={product.author}/>
                <div>
                    <p>Hardcover</p>
                </div>
                <Price price={product?.edition?.hardcover?.price}/>
                <hr />
                <div>
                    <p>Paperback</p>
                </div>
                <Price price={product?.edition?.paperback?.price}/>
            </div>
        </>
    );
};