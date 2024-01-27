import { useContext, useEffect } from "react";
import { ProductContext } from "../context/Context";
import { useLocation } from "react-router-dom";
import BookCard from "../components/BookCard";
import Productshelf from "../components/ProductShelf";
import { byGenre } from "../services/api/books/ByGenre";

export default function Genre() {
    const {state} = useLocation();
    const {products, setProducts} = useContext(ProductContext);
    useEffect(() => {
        byGenre(state, setProducts);
    }, [state]);
    return (
        <>
            <Productshelf>
                {
                    products.map(product => {
                        return (
                            <>
                                <BookCard product={product}/>
                            </>
                        );
                    })
                }
            </Productshelf>
        </>
    );
};