export const uploadProduct = async (e, category) => {
    e.preventDefault();
    try {
        const product = new FormData(e.target);
        const token = sessionStorage.getItem("token");
        if(token) {
            let response;
            switch(category) {
                case "book": response = await fetch(`${import.meta.env.VITE_BASE_URL_BOOKS}${import.meta.env.VITE_UPLOAD}`, {method: "POST", headers: {token: token}, body: product});
                    break;
                case "movie": response = await fetch(`${import.meta.env.VITE_BASE_URL_MOVIES}${import.meta.env.VITE_UPLOAD}`, {method: "POST", headers: {token: token}, body: product});
                    break;
                default: response = await fetch(`${import.meta.env.VITE_BASE_URL_ALBUMS}${import.meta.env.VITE_UPLOAD}`, {method: "POST", headers: {token: token}, body: product});
            };
            if(response.ok) {
                const data = await response.json();
                if(data.success) console.log(data.message);
            };
        };
    } catch (error) {
        //
    }
};