import { useState } from "react";
import { ProductContext } from "./Context";

export default function ProductsContainer({children}) {
    const [products, setProducts] = useState([]);
    return (
        <>
            <ProductContext.Provider value={{
                products, setProducts,
            }}>
                {children}
            </ProductContext.Provider>
        </>
    );
};