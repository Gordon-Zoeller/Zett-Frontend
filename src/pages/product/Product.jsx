import { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import Cover from "../../components/ui/render/Cover";
import Title from "../../components/ui/render/Title";
import { ProductContext } from "../../context/Context";
import RunTime from "../../components/ui/render/RunTime";
import Year from "../../components/ui/render/Year";
import IMN from "../../components/ui/render/IMN";

export default function Product() {
    const {product} = useContext(ProductContext);
    return (
        <>
            <div>
                <Cover cover={product?.edition?.one?.image?.thumbnail}/>
                <Title  title={product.title}/>
                <div>
                    <p>{product.genre}</p>
                </div>
                <div>
                    <p>{product.language}</p>
                </div>
                <ProductCard product={product}/>
                {
                    product.category === "books" &&
                    <>
                        <div>
                            <p>{product?.edition?.one?.pages}</p>
                            <p>{product?.edition?.one?.publisher}</p>
                            <Year year={product?.edition?.one?.year}/>
                            <p>{product?.edition?.one?.ISBN}</p>
                        </div>
                    </>
                }
                {
                    product.category === "movies" &&
                    <>
                        <div>
                            <p>{product.subTitles}</p>
                            <p>{product.mpaa}</p>
                            <p>{product.country}</p>
                            <p>{product.distributor}</p>
                            <RunTime runTime={product.runTime}/>
                            <Year year={product?.edition?.one?.year}/>
                            <IMN imn={product?.edition?.one?.imn}/>
                        </div>
                    </>
                }
                {
                    product.category === "albums" &&
                    <>
                        <div>
                            <p>{product.label}</p>
                            <RunTime runTime={product.runTime}/>
                            <Year year={product?.edition?.one?.year}/>
                            <IMN imn={product?.edition?.one?.imn}/>
                        </div>
                    </>
                }
                <div>
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    );
};