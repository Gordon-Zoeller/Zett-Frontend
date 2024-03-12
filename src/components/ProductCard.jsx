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
                    product.author && <Author author={product.author}/>
                }
                {
                    product.artist && <Artist artist={product.artist}/>
                }
                {
                    product.director && <Director director={product.director}/>
                }
                {
                    product.category === "book" && <Hardcover/>
                }
                {
                    product.category === "movie" && <DVD/>
                }
                {
                    product.category === "album" && <CD/>
                }
                <Price price={product?.edition?.one?.price}/>
                <hr />
                {
                    product.category === "book" && <Paperback/>
                }
                {
                    product.category === "movie" && <BlueRay/>
                }
                {
                    product.category === "album" && <Vinyl/>
                }
                <Price price={product?.edition?.two?.price}/>
            </div>
        </>
    );
};