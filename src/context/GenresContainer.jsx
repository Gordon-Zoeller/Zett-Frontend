import { useState } from "react";
import { GenreContext } from "./Context";

export default function GenresContainer({children}) {
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