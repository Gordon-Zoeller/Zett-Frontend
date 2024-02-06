import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GenreContext } from "../../context/Context";

export default function Genres() {
    const {genres, setGenres} = useContext(GenreContext);
    useEffect(() => {
        async function getGenres() {
            try {
                const response = await fetch(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_GENRES_BOOKS}`);
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
                <ul>
                    {
                        genres.map(genre => {
                            const snakeCase = genre.genre.replaceAll(" ", "_");
                            return (
                                <>
                                    <li key={genre._id}><NavLink to={`/books/genre/${snakeCase}`} state={snakeCase}>{genre.genre}</NavLink></li>
                                </>
                            );
                        })
                    }
                </ul>
            </nav>
            <Outlet/>
        </>
    );
};