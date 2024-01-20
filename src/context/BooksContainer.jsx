import { useState } from "react";
import { Context } from "./Context";

export default function BooksContainer({children}) {
    const [books, setBooks] = useState([]);
    return (
        <>
            <Context.Provider value={{
                books, setBooks,
            }}>
                {children}
            </Context.Provider>
        </>
    );
};