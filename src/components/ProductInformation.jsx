import Description from "./ui/input/Description";
import Genre from "./ui/input/Genre";
import Language from "./ui/input/Language";
import Title from "./ui/input/Title";

export default function ProductInformation({children}) {
    return (
        <>
            <Title/>
            <Genre/>
            {children}
            <Language/>
            <Description/>
        </>
    );
};