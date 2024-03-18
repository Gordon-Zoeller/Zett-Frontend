import { useContext, useEffect } from "react"
import { GenreContext } from "../context/Context"
import { getGenres } from "../services/api/genres/getGenres";

export function useGenres(props) {
    const {setGenres} = useContext(GenreContext);
    useEffect(() => {
        getGenres(setGenres, props);
    }, [props]);
};