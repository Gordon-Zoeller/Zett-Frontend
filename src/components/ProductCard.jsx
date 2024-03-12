import Price from "./ui/render/Price";
import Author from "./ui/render/Author";
import Artist from "./ui/render/Artist";
import Director from "./ui/render/Director";
import Hardcover from "./ui/render/Hardcover";
import Paperback from "./ui/render/Paperback";
import DVD from "./ui/render/DVD";
import BlueRay from "./ui/render/BlueRay";
import CD from "./ui/render/CD";
import Vinyl from "./ui/render/Vinyl";

export default function ProductCard({product}) {
    return (
        <>
            <div>
                {
                    product.category === "books" &&
                    <>
                        <Author author={product.author}/>
                        <Hardcover/>
                        <Price price={product?.edition?.one?.price}/>
                        <hr />
                        <Paperback/>
                        <Price price={product?.edition?.two?.price}/>
                    </>
                }
                {
                    product.category === "movies" &&
                    <>
                        <Director director={product.director}/>
                        <DVD/>
                        <Price price={product?.edition?.one?.price}/>
                        <hr />
                        <BlueRay/>
                        <Price price={product?.edition?.two?.price}/>
                    </>
                }
                {
                    product.category === "albums" &&
                    <>
                        <Artist artist={product.artist}/>
                        <CD/>
                        <Price price={product?.edition?.one?.price}/>
                        <hr />
                        <Vinyl/>
                        <Price price={product?.edition?.two?.price}/>
                    </>
                }
            </div>
        </>
    );
};