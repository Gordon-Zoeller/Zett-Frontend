export const getGenres = async (setGenres) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_GENRES}${import.meta.env.VITE_GENRES_BOOKS}`);
        if(response.ok) {
            const data = await response.json();
            if(data.success) {
                setGenres(data.data);
            };
        };
    } catch (error) {
        //
    };
};