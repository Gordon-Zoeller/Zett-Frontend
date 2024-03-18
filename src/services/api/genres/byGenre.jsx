export const byGenre = async (state, setProducts) => {
    try {
        let response;
        switch(state.category) {
            case "books": response = await fetch(`${import.meta.env.VITE_BASE_URL_BOOKS}${import.meta.env.VITE_BY_GENRE}${state.snake}`);
                break;
            case "movies": response = await fetch(`${import.meta.env.VITE_BASE_URL_MOVIES}${import.meta.env.VITE_BY_GENRE}${state.snake}`);
                break;
            default: response = await fetch(`${import.meta.env.VITE_BASE_URL_ALBUMS}${import.meta.env.VITE_BY_GENRE}${state.snake}`);
        };
        if(response.ok) {
            const data = await response.json();
            if(data.success) setProducts(data.data);
        };
    } catch (error) {
        //
    }
};