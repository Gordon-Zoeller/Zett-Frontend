import Cover from "./ui/render/Cover";
import Title from "./ui/render/Title";
import Director from "./ui/render/Director";
import Price from "./ui/render/Price";

export default function MovieCard({product}) {
    return (
        <>
            <div>
                <Cover cover={product?.edition?.dvd?.image?.thumbnail}/>
                <Title title={product.title}/>
                <Director director={product.director}/>
            </div>
            <div>
                <p>DVD</p>
            </div>
            <Price price={product?.edition?.dvd?.price}/>
            <hr />
            <div>
                <p>Blue-ray</p>
            </div>
            <Price price={product?.edition?.blueRay?.price}/>
        </>
    );
};