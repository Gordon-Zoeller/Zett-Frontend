import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Author from "./ui/render/Author";
import Price from "./ui/render/Price";

export default function BookCard({product}) {
    return (
        <>
            <div>
                <Cover cover={product.edition.hardcover.image.thumbnail}/>
                <Title title={product.title}/>
                <Author author={product.author}/>
                <div>
                    <p>Hardcover</p>
                </div>
                <Price price={product.edition.hardcover.price}/>
                <hr />
                <div>
                    <p>Paperback</p>
                </div>
                <Price price={product.edition.paperback.price}/>
            </div>
        </>
    );
};