import { useContext, useEffect } from "react";
import { ProductContext } from "../context/Context";
import { getProduct } from "../services/api/products/getProduct";

export function useSessionStorage() {
    const {product, setProduct} = useContext(ProductContext);
    useEffect(() => {
        const storageProduct = JSON.parse(sessionStorage.getItem("product"));
        if(storageProduct) {
            getProduct(storageProduct, setProduct);
        } else {
            let storageProduct = {
                id: product._id,
                category: product.category
            };
            sessionStorage.setItem("product", JSON.stringify(storageProduct));
        };
    }, []);
};