export const signin = async (e, setUser, navigate) => {
    e.preventDefault();
    const user = {
        email: e.target.email.value,
        password: e.target.password.value,
    };
    try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL_USER}${import.meta.env.VITE_SIGNIN}`, {method: "POST",headers: {"Content-Type": "application/json"}, body: JSON.stringify(user)});
        if(response.ok) {
            const token = response.headers.get("token");
            if(token) {
                sessionStorage.setItem("token", token);
                const data = await response.json();
                if(data.success) {
                    setUser(data.data);
                    navigate("/");
                };
            };
        };
    } catch (error) {
        //
    };
};