export const uploadMovie = async e => {
    e.preventDefault();
    try {
        const movie = new FormData(e.target);
        const token = sessionStorage.getItem("token");
        if(token) {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL_MOVIES}${import.meta.env.VITE_UPLOAD}`, {method: "POST", headers: {token: token}, body: movie});
            if(response.ok) {
                const data = await response.json();
                if(data.success) console.log(data.message);
            };
        };
    } catch (error) {
        //
    };
};