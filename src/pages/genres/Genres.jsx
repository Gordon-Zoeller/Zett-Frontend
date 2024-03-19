import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GenreContext } from "../../context/Context";
import { useGenres } from "../../hooks/useGenres";

export default function Genres(props) {
    const {genres} = useContext(GenreContext);
    const productsGenres = useGenres(props);
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