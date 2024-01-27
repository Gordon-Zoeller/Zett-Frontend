import { useContext, useEffect } from "react";
import { ProductContext } from "../context/Context";
import { useLocation } from "react-router-dom";
import BookCard from "../components/BookCard";
import Bookshelf from "../components/Bookshelf";
import { byGenre } from "../services/api/books/ByGenre";

export default function Genre() {
    const {state} = useLocation();
    const {books, setBooks} = useContext(ProductContext);
    useEffect(() => {
        byGenre(state, setBooks);
    }, [state]);
    return (
        <>
            <Bookshelf>
                {
                    books.map(book => {
                        return (
                            <>
                                <BookCard book={book}/>
                            </>
                        );
                    })
                }
            </Bookshelf>
        </>
    );
};