import { useContext } from "react";
import { ProductContext } from "../../context/Context";
import { Link } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import Cover from "../../components/ui/render/Cover";
import Title from "../../components/ui/render/Title";
import { urlTitle } from "../../helpers/UrlTitle";
import { useProducts } from "../../hooks/useProducts";

export default function Products() {
    const {products, setProduct} = useContext(ProductContext);
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
    const getProducts = useProducts(path);
    return (
        <>
            <div>
                {
                    products.map(product => {
                        return (
                            <>
                                <Link to={`/${product.category}/product/${urlTitle(product.title)}`} state="one" onClick={() => setProduct(product)}>
                                    <Cover cover={product?.edition?.one?.image?.thumbnail}/>
                                </Link>
                                <Link to={`/${product.category}/product/${urlTitle(product.title)}`} state="one" onClick={() => setProduct(product)}>
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