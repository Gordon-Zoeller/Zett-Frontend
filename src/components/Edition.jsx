import Image from "./ui/input/Image";
import ISBN from "./ui/input/ISBN";
import Price from "./ui/input/Price";
import Year from "./ui/input/Year";

export default function Edition({children}) {
    return (
        <>
            {children}
            <Year/>
            <Price/>
            <ISBN/>
            <Image/>
        </>
    );
};