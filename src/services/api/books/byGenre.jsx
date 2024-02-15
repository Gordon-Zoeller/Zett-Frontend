export const booksByGenre = async (snake, setProducts) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_BOOKS}${import.meta.env.VITE_BY_GENRE}${snake}`);
        if(response.ok) {
            const data = await response.json();
            if(data.success) setProducts(data.data);
        };
    } catch (error) {
        //
    };
};