import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/Context";
import { useLocation } from "react-router-dom";
import BookCard from "../../components/BookCard";
import MovieCard from "../../components/MovieCard";
import AlbumCard from "../../components/AlbumCard";
import { bySearch } from "../../services/api/search/bySearch";
import { productsByGenre } from "../../services/api/genres/byGenre";

export default function Products() {
    const {state} = useLocation();
    const {products, setProducts} = useContext(ProductContext);
    const query = new URLSearchParams(window.location.search);
    let path = "";
    if(query.size !== 0) {
        path = `${query.get("q").replaceAll(" ", "_")}/${query.get("c")}`;
    }
    /*
    if(query.size !== 0) {
        const getPath = () => {
            let string = "";
            for(const pair of query) string += `${pair[1]}/`;
            return string.replaceAll(" ", "+");
        };
        path = getPath();
    };
    */
    useEffect(() => {
        if(state) {
            productsByGenre(state, setProducts);
        } else {
            bySearch(path, setProducts);
        };
    }, [state, path]);
    return (
        <>
            <div>
                {
                    products.map(product => {
                        if(state === null) {
                            if(path.endsWith("books")) {
                                return (
                                    <>
                                        <BookCard product={product}/>
                                    </>
                                );
                            } else if(path.endsWith("movies")) {
                                return (
                                    <>
                                        <MovieCard product={product}/>
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        <AlbumCard product={product}/>
                                    </>
                                );
                            };
                        } else {
                            if(path.endsWith("books")  || state.category === "books") {
                                return (
                                    <>
                                        <BookCard product={product}/>
                                    </>
                                );
                            } else if(path.endsWith("movies") || state.category === "movies") {
                                return (
                                    <>
                                        <MovieCard product={product}/>
                                    </>
                                );
                            } else {
                                return (
                                    <>
                                        <AlbumCard product={product}/>
                                    </>
                                );
                            };
                        };
                    })
                }
            </div>
        </>
    );
};