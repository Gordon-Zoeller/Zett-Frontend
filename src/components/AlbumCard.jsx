import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Artist from "./ui/render/Artist";
import Price from "./ui/render/Price";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/Context";

export default function AlbumCard({product}) {
    const {setProduct} = useContext(ProductContext);
    return (
        <>
            <div>
                <Link to={`/albums/product/${product.title}`} onClick={() => setProduct(product)}>
                    <Cover cover={product?.edition?.cd?.image?.thumbnail}/>
                </Link>
                <Link to={`/albums/product/${product.title}`} onClick={() => setProduct(product)}>
                    <Title title={product.title}/>
                </Link>
                <Artist artist={product.artist}/>
                <div>
                    <p>CD</p>
                </div>
                <Price price={product?.edition?.cd?.price}/>
                <hr />
                <div>
                    <p>Vinyl</p>
                </div>
                <Price price={product?.edition?.vinyl?.price}/>
            </div>
        </>
    );
};