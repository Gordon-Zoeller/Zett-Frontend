import { useState } from "react";
import { ProductContext } from "./Context";

export default function BooksContainer({children}) {
    const [books, setBooks] = useState([]);
    return (
        <>
            <ProductContext.Provider value={{
                books, setBooks,
            }}>
                {children}
            </ProductContext.Provider>
        </>
    );
};