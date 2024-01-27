import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GenreContext } from "../context/Context";

export default function Books() {
    const {genres, setGenres} = useContext(GenreContext);
    useEffect(() => {
        async function getGenres() {
            try {
                const response = await fetch(`${import.meta.env.VITE_GENRES}`);
                if(response.ok) {
                    const data = await response.json();
                    if(data.success) {
                        setGenres(data.data);
                    };
                };
            } catch (error) {
                //
            }
        };
        getGenres();
    }, []);
    return (
        <>
            <nav>
                {
                    genres.map(genre => {
                        const snakeCase = genre.genre.replaceAll(" ", "_");
                        return (
                            <>
                                <h3 key={genre._id}><NavLink to={`/books/genre/${snakeCase}`} state={snakeCase}>{genre.genre}</NavLink></h3>
                            </>
                        );
                    })
                }
            </nav>
            
                <Outlet/>
            
        </>
    );
};