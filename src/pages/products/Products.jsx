import { useContext, useEffect } from "react";
import { ProductContext } from "../../context/Context";
import { Link, useLocation } from "react-router-dom";
import { bySearch } from "../../services/api/search/bySearch";
import { productsByGenre } from "../../services/api/genres/byGenre";
import ProductCard from "../../components/ProductCard";
import Cover from "../../components/ui/render/Cover";
import Title from "../../components/ui/render/Title";

export default function Products() {
    const {state} = useLocation();
    const {products, setProducts, setProduct} = useContext(ProductContext);
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
                        return (
                            <>
                                <Link to={`/${product.category}/product/${product.title}`} state="one" onClick={() => setProduct(product)}>
                                    <Cover cover={product?.edition?.one?.image?.thumbnail}/>
                                </Link>
                                <Link to={`/${product.category}/product/${product.title}`} state="one" onClick={() => setProduct(product)}>
                                    <Title title={product.title}/>
                                </Link>
                                <ProductCard product={product}/>
                            </>
                        );
                    })
                }
            </div>
        </>
    );
};