export const uploadAlbum = async e => {
    e.preventDefault();
    try {
        const album = new FormData(e.target);
        const token = sessionStorage.getItem("token");
        if(token) {
            const response = await fetch(`${import.meta.env.VITE_BASE_URL_ALBUMS}${import.meta.env.VITE_UPLOAD}`, {method: "POST", headers: {token: token}, body: album});
            if(response.ok) {
                const data = await response.json();
                if(data.success) console.log(data.message);
            };
        };
    } catch (error) {
        //
    };
};