import { useEffect, useState } from "react";

export default function Books() {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        async function getGenres() {
            try {
                const response = await fetch(`${import.meta.env.VITE_GENRES}`);
                if(response.ok) {
                    const data = await response.json();
                    if(data.success) {
                        console.log(data)
                        setGenres(data.data);
                    };
                };
            } catch (error) {
                //
            }
        };
        getGenres();
    }, []);
    return (
        <>
            <h2>Books</h2>
            <div>
                {
                    genres.map(genre => {
                        return (
                            <>
                                <h3 key={genre._id}>{genre.genre}</h3>
                            </>
                        );
                    })
                }
            </div>
        </>
    );
};