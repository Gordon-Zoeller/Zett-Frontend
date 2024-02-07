import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GenreContext } from "../../context/Context";
import { getGenres } from "../../services/api/genres/getGenres";

export default function Genres() {
    const {genres, setGenres} = useContext(GenreContext);
    useEffect(() => {
        getGenres(setGenres);
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