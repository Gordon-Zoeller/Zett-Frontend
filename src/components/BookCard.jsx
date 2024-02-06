import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Author from "./ui/render/Author";
import Year from "./ui/render/Year";
import Price from "./ui/render/Price";
import ISBN from "./ui/render/ISBN";

export default function BookCard({product}) {
    return (
        <>
            <div>
                {/*<Cover cover={product.thumbnail}/>*/}
                <Title title={product.title}/>
                <Author author={product.author}/>
                <Year year={product.edition.hardcover.year}/>
                <Price price={product.edition.hardcover.price}/>
                <ISBN ISBN={product.edition.hardcover.ISBN}/>
            </div>
        </>
    );
};