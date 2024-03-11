import { useEffect, useRef, useState } from "react";
import { ProductContext } from "./Context";

export default function ProductsContainer({children}) {
    const [products, setProducts] = useState([]);
    const formRef = useRef();
    useEffect(() => {
        if(window.location.href.includes("/books/search?q=")) {
            formRef.current.value = "books";
        } else if(window.location.href.includes("/movies/search?q=")) {
            formRef.current.value = "movies";
        } else if(window.location.href.includes("/albums/search?q=")) {
            formRef.current.value = "albums";
        } else {
            formRef.current.value = "all";
        };
    }, []);
    return (
        <>
            <ProductContext.Provider value={{
                products, setProducts,
                formRef
            }}>
                {children}
            </ProductContext.Provider>
        </>
    );
};