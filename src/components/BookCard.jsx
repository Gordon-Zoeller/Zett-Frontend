import Cover from "./ui/Cover";
import Title from "./ui/Title";
import Author from "./ui/Author";
import Year from "./ui/Year";
import Price from "./ui/Price";
import ISBN from "./ui/ISBN";

export default function BookCard({book}) {
    return (
        <>
            <div>
                <Cover cover={book.thumbnail}/>
                <Title title={book.title}/>
                <Author author={book.author}/>
                <Year year={book.year}/>
                <Price price={book.price}/>
                <ISBN ISBN={book.ISBN}/>
            </div>
        </>
    );
};