import { useContext, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GenreContext } from "../../context/Context";
import { getGenres } from "../../services/api/genres/getGenres";

export default function Genres(props) {
    const {genres, setGenres} = useContext(GenreContext);
    useEffect(() => {
        getGenres(setGenres, props);
    }, [props]);
    return (
        <>
            <nav>
                <ul>
                    {
                        genres.map(genre => {
                            const snake = genre.genre.replaceAll(" ", "_");
                            return (
                                <>
                                    <li key={genre._id}><NavLink to={`/${props.category}/genre/${snake}`} state={{snake: snake, category: props.category}}>{genre.genre}</NavLink></li>
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