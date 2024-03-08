export const productsByGenre = async (snake, setProducts, ...api) => {
    try {
        const response = await fetch(`${api[0]}${api[1]}${snake}`);
        if(response.ok) {
            const data = await response.json();
            if(data.success) setProducts(data.data);
        };
    } catch (error) {
        //
    }
};