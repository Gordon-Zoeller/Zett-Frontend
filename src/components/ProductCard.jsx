import Author from "./ui/render/Author";
import Artist from "./ui/render/Artist";
import Director from "./ui/render/Director";
import Hardcover from "./ui/render/Hardcover";
import Paperback from "./ui/render/Paperback";
import DVD from "./ui/render/DVD";
import BlueRay from "./ui/render/BlueRay";
import CD from "./ui/render/CD";
import Vinyl from "./ui/render/Vinyl";
import { useContext } from "react";
import { ProductContext } from "../context/Context";
import EditionCard from "./EditionCard";

export default function ProductCard({product}) {
    const {setProduct} = useContext(ProductContext);
    return (
        <>
            <div>
                {
                    product.category === "books" &&
                    <>
                        <Author author={product.author}/>
                        <EditionCard product={product} price={product?.edition?.one?.price} edition="one">
                            <Hardcover/>
                        </EditionCard>
                        <hr />
                        <EditionCard product={product} price={product?.edition?.two?.price} edition="two">
                            <Paperback/>
                        </EditionCard>
                    </>
                }
                {
                    product.category === "movies" &&
                    <>
                        <Director director={product.director}/>
                        <EditionCard product={product} price={product?.edition?.one?.price} edition="one">
                            <DVD/>
                        </EditionCard>
                        <hr />
                        <EditionCard product={product} price={product?.edition?.two?.price} edition="two">
                            <BlueRay/>
                        </EditionCard>
                    </>
                }
                {
                    product.category === "albums" &&
                    <>
                        <Artist artist={product.artist}/>
                        <EditionCard product={product} price={product?.edition?.one?.price} edition="one">
                            <CD/>
                        </EditionCard>
                        
                        <hr />
                        <EditionCard product={product} price={product?.edition?.two?.price} edition="two">
                            <Vinyl/>
                        </EditionCard>
                    </>
                }
            </div>
        </>
    );
};