import Image from "./ui/input/Image";
import Price from "./ui/input/Price";
import Year from "./ui/input/Year";

export default function Edition({children}) {
    return (
        <>
            {children}
            <Year/>
            <Price/>
            <Image/>
        </>
    );
};