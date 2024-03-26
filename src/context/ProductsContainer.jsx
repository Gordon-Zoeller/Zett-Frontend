import { useEffect, useRef, useState } from "react";
import { ProductContext } from "./Context";

export default function ProductsContainer({children}) {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState({});
    const formRef = useRef();
    useEffect(() => {
        if(window.location.href.includes("/books/search?q=") || window.location.href.includes("/books/product")) {
            formRef.current.value = "books";
        } else if(window.location.href.includes("/movies/search?q=") || window.location.href.includes("/movies/product")) {
            formRef.current.value = "movies";
        } else if(window.location.href.includes("/albums/search?q=") || window.location.href.includes("/albums/product")) {
            formRef.current.value = "albums";
        } else {
            formRef.current.value = "all";
        };
    }, []);
    return (
        <>
            <ProductContext.Provider value={{
                products, setProducts,
                product, setProduct,
                formRef
            }}>
                {children}
            </ProductContext.Provider>
        </>
    );
};