export const booksBySearch = async (path, setProducts) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_SEARCH}${path}`);
        if(response.ok) {
            const data = await response.json();
            if(data.success) setProducts(data.data);
        };
    } catch (error) {
        //
    }
};