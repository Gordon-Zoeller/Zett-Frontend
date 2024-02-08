import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/Context";
import { useLocation } from "react-router-dom";
import BookCard from "../../components/BookCard";
import { booksByGenre } from "../../services/api/books/byGenre";
import { booksBySearch } from "../../services/api/books/bySearch";

export default function Products() {
    const {state} = useLocation();
    const {products, setProducts} = useContext(ProductContext);
    const query = new URLSearchParams(window.location.search);
    let path = "";
    if(query.size !== 0) {
        const getPath = () => {
            let string = "";
            for(const pair of query) string += `${pair[1]}/`;
            return string.replaceAll(" ", "+");
        };
        path = getPath();
    };
    useEffect(() => {
        if(state) {
            booksByGenre(state, setProducts);
        } else {
            booksBySearch(path, setProducts);
        };
    }, [state, path]);
    return (
        <>
            <div>
                {
                    products.map(product => {
                        return (
                            <>
                                <BookCard product={product}/>
                            </>
                        );
                    })
                }
            </div>
        </>
    );
};