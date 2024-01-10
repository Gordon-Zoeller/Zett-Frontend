import { useContext, useEffect } from "react";
import { Context } from "../context/Context";
import { useLocation } from "react-router-dom";
import BookCard from "../components/BookCard";
import BooksContainer from "../components/BooksContainer";

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
            <BooksContainer> //component reusable in SearchResult
                {
                    books.map(book => {
                        return (
                            <>
                                <BookCard book={book}/>
                            </>
                        );
                    })
                }
            </BooksContainer>
        </>
    );
};