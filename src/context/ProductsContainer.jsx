import { useEffect, useRef, useState } from "react";
import { ProductContext } from "./Context";

export default function ProductsContainer({children}) {
    const [products, setProducts] = useState([]);
    const formRef = useRef();
    useEffect(() => {
        if(window.location.href.includes("/books/search?q=")) {
            formRef.current.value = "books";
        } else if(window.location.href.includes("/movies/search?")) {
            formRef.current.value = "movies"
        }
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