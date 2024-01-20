import { useState } from "react";
import { Context } from "./Context";

export default function BooksContainer({children}) {
    const [genres, setGenres] = useState([]);
    return (
        <>
            <Context.Provider value={{
                genres, setGenres,
            }}>
                {children}
            </Context.Provider>
        </>
    );
};