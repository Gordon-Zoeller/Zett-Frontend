export const booksByGenre = async (state, setBooks) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_BOOKS_BY_GENRE}${state}`);
        if(response.ok) {
            const data = await response.json();
            if(data.success) setBooks(data.data);
        };
    } catch (error) {
        //
    };
};