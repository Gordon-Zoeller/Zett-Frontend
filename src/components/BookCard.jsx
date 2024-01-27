import Cover from "./ui/Cover";
import Title from "./ui/Title";
import Author from "./ui/Author";
import Year from "./ui/Year";
import Price from "./ui/Price";
import ISBN from "./ui/ISBN";

export default function BookCard({product}) {
    return (
        <>
            <div>
                <Cover cover={product.thumbnail}/>
                <Title title={product.title}/>
                <Author author={product.author}/>
                <Year year={product.year}/>
                <Price price={product.price}/>
                <ISBN ISBN={product.ISBN}/>
            </div>
        </>
    );
};