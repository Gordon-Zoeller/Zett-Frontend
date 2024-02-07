export const verify = async (setUser, token) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_USER}${import.meta.env.VITE_VERIFY}`, {method: "GET", headers: {token: token}});
        if(response.ok) {
            const data = await response.json();
            if(data.success) {
                setUser(data.data);
            };
        };
    } catch (error) {
        //
    };
};