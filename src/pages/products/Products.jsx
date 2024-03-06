import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/Context";
import { useLocation } from "react-router-dom";
import BookCard from "../../components/BookCard";
import MovieCard from "../../components/MovieCard";
import { booksByGenre } from "../../services/api/books/byGenre";
import { bySearch } from "../../services/api/search/bySearch";
import { moviesByGenre } from "../../services/api/movies/byGenre";

export default function Products() {
    const {state} = useLocation();
    const {products, setProducts} = useContext(ProductContext);
    const query = new URLSearchParams(window.location.search);
    let path = `${query.get("q").replaceAll(" ", "+")}/${query.get("c")}`;
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
            switch(state.category) {
                case "books": booksByGenre(state.snake, setProducts);
                break;
                case "movies": moviesByGenre(state.snake, setProducts);
                break;
                default: console.log("hello world");
            };
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
                            };
                        }
                        /*if(path.endsWith("books")  || state.category === "books") {
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
                        };*/
                    })
                }
            </div>
        </>
    );
};