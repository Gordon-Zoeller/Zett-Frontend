import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../context/Context";
import { bySearch } from "../services/api/search/bySearch";
import { byGenre } from "../services/api/products/byGenre";


export function useProducts(path) {
    const {setProducts} = useContext(ProductContext);
    const {state} = useLocation();
    useEffect(() => {
        if(state) {
            byGenre(state, setProducts);
        } else {
            bySearch(path, setProducts);
        };
    }, [state, path]);
};