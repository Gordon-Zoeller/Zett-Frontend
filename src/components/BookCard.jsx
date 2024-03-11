import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Author from "./ui/render/Author";
import Price from "./ui/render/Price";
import { Link } from "react-router-dom";

export default function BookCard({product}) {
    return (
        <>
            <div>
                <Link to={`/books/product/${product.title}`}>
                    <Cover cover={product?.edition?.hardcover?.image?.thumbnail}/>
                </Link>
                <Link to={`/books/product/${product.title}`}>
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