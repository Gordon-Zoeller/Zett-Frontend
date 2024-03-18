import { useContext } from "react";
import ProductCard from "../../components/ProductCard";
import Cover from "../../components/ui/render/Cover";
import Title from "../../components/ui/render/Title";
import { ProductContext } from "../../context/Context";
import RunTime from "../../components/ui/render/RunTime";
import Year from "../../components/ui/render/Year";
import IMN from "../../components/ui/render/IMN";
import { useLocation } from "react-router-dom";
import BookCard from "../../components/BookCard";

export default function Product() {
    const {product} = useContext(ProductContext);
    const {state} = useLocation();
    return (
        <>
            <div>
                {
                    state === "one" ? (
                        <Cover cover={product?.edition?.one?.image?.thumbnail}/>
                    ) : (
                        <Cover cover={product?.edition?.two?.image?.thumbnail}/>
                    )
                }
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
                    (
                        state === "one" ? (
                            <>
                                <BookCard data={{
                                        pages: product?.edition?.one?.pages,
                                        publisher: product?.edition?.one?.publisher,
                                        isbn: product?.edition?.one?.ISBN
                                    }}>
                                    <Year year={product?.edition?.one?.year}/>
                                </BookCard>
                            </>
                        ) : (
                            <>
                                <BookCard data={{
                                        pages: product?.edition?.two?.pages,
                                        publisher: product?.edition?.two?.publisher,
                                        isbn: product?.edition?.two?.ISBN
                                    }}>
                                    <Year year={product?.edition?.two?.year}/>
                                </BookCard>
                            </>
                        )
                    )
                }
                {
                    product.category === "movies" &&
                    <>
                        <div>
                            <p>{product.subtitles}</p>
                            <p>{product.mpaa}</p>
                            <p>{product.country}</p>
                            <p>{product.distributor}</p>
                            <RunTime runTime={product.runTime}/>
                        </div>
                        <div>
                            {
                                state === "one" ? (
                                    <>
                                        <IMN imn={product?.edition?.one?.imn}/>
                                        <Year year={product?.edition?.one?.year}/>
                                    </>
                                ) : (
                                    <>
                                        <IMN imn={product?.edition?.two?.imn}/>
                                        <Year year={product?.edition?.two?.year}/>
                                    </>
                                )
                            }
                        </div>
                    </>
                }
                {
                    product.category === "albums" &&
                    <>
                        <div>
                            <p>{product.label}</p>
                            <RunTime runTime={product.runTime}/>
                        </div>
                        <div>
                            {
                                state === "one" ? (
                                    <>
                                        <Year year={product?.edition?.one?.year}/>
                                        <IMN imn={product?.edition?.one?.imn}/>
                                    </>
                                ) : (
                                    <>
                                        <Year year={product?.edition?.two?.year}/>
                                        <IMN imn={product?.edition?.two?.imn}/>
                                    </>
                                )
                            }
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