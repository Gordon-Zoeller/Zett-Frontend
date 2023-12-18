import { NavLink } from "react-router-dom";

export default function LiLink(props) {
    return (
        <>
            <li>
                <NavLink to={props.go.where}>{props.go.text}</NavLink>
            </li>
        </>
    );
};