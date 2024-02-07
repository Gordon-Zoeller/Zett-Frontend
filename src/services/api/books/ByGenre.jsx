export const booksByGenre = async (state, setProducts) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_BOOKS}${import.meta.env.VITE_BOOKS_BY_GENRE}${state}`);
        if(response.ok) {
            const data = await response.json();
            if(data.success) setProducts(data.data);
        };
    } catch (error) {
        //
    };
};