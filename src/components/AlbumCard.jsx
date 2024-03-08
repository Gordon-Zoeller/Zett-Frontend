import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Artist from "./ui/render/Artist";
import Price from "./ui/render/Price";

export default function AlbumCard({product}) {
    return (
        <>
            <div>
                <Cover cover={product?.edition?.cd?.image?.thumbnail}/>
                <Title title={product.title}/>
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