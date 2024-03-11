import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Artist from "./ui/render/Artist";
import Price from "./ui/render/Price";
import { Link } from "react-router-dom";

export default function AlbumCard({product}) {
    return (
        <>
            <div>
                <Link>
                    <Cover cover={product?.edition?.cd?.image?.thumbnail}/>
                </Link>
                <Link>
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