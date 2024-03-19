export const getProduct = async (storageProduct, setProduct) => {
    try {
        let response;
        switch(storageProduct.category) {
            case "books": response = await fetch(`${import.meta.env.VITE_BASE_URL_BOOKS}${storageProduct.id}`);
                break;
            case "movies": response = await fetch(`${import.meta.env.VITE_BASE_URL_MOVIES}${storageProduct.id}`);
                break;
            default: response = await fetch(`${import.meta.env.VITE_BASE_URL_ALBUMS}${storageProduct.id}`);
        };
        if(response.ok) {
            const data = await response.json();
            if(data.success) setProduct(data.data);
        };
    } catch (error) {
        //
    }
};