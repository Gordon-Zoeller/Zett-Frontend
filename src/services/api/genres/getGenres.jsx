export const getGenres = async (setGenres, props) => {
    try {
        let response;
        switch(props.category) {
            case "books": response = await fetch(`${import.meta.env.VITE_BASE_URL_GENRES}${import.meta.env.VITE_GENRES_BOOKS}`);
                break;
            case "movies": response = await fetch(`${import.meta.env.VITE_BASE_URL_GENRES}${import.meta.env.VITE_GENRES_MOVIES}`);
                break;
            default: {};
        };
        if(response.ok) {
            const data = await response.json();
            if(data.success) setGenres(data.data);
        };
    } catch (error) {
        //
    };
};