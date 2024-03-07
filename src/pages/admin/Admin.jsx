import { NavLink, Outlet } from "react-router-dom";

export default function Admin() {
    return (
        <>
            <h2>Admin</h2>
            <nav>
                <ul>
                    <li>Upload</li>
                    <ul>
                        <li><NavLink to="/user/admin/book">Book</NavLink></li>
                        <li><NavLink to="/user/admin/movie">Movie</NavLink></li>
                        <li><NavLink to="/user/admin/album">Album</NavLink></li>
                    </ul>
                </ul>
            </nav>
            <div>
                <Outlet/>
            </div>
        </>
    );
};