import Description from "./ui/input/Description";
import Genre from "./ui/input/Genre";
import Language from "./ui/input/Language";
import Title from "./ui/input/Title";

export default function ProductInput({children}) {
    return (
        <>
            <Title/>
            <Genre/>
            <Language/>
            {children}
            <Description/>
        </>
    );
};