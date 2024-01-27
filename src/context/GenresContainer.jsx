import { useState } from "react";
import { GenreContext } from "./Context";

export default function BooksContainer({children}) {
    const [genres, setGenres] = useState([]);
    return (
        <>
            <GenreContext.Provider value={{
                genres, setGenres,
            }}>
                {children}
            </GenreContext.Provider>
        </>
    );
};