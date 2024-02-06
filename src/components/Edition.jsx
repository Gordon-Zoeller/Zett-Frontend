import Image from "./ui/input/Image";
import ISBN from "./ui/input/ISBN";
import Price from "./ui/input/Price";
import Publisher from "./ui/input/Publisher";
import Year from "./ui/input/Year";

export default function Edition() {
    return (
        <>
            <Publisher/>
            <Year/>
            <Price/>
            <ISBN/>
            <Image/>
        </>
    );
};