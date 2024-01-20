import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useLocation } from "react-router-dom";
import BookCard from "../components/BookCard";
import Bookshelf from "../components/Bookshelf";

export default function Genre() {
    const {state} = useLocation();
    const {books, setBooks} = useContext(Context);
    useEffect(() => {
        async function booksByGenre() {
            try {
                const response = await fetch(`${import.meta.env.VITE_BOOKS_BY_GENRE}${state}`);
                if(response.ok) {
                    const data = await response.json();
                    if(data.success) setBooks(data.data);
                };
            } catch (error) {
                //
            };
        };
        booksByGenre();
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