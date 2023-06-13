import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }){

    const [data, setData] = useState({ user: [], isAdmin: false});
    
    async function signIn({ email, password }){
        try{
            const response = await api.post("/sessions", { email, password })
            const { user, token } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
            localStorage.setItem("@foodexplorer:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({ user, token, isAdmin: user.isAdmin == 1 });
            alert("Entrou!")

        }catch(error){
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message || "Erro desconhecido";
                alert(errorMessage);
              } else {
                alert("Não foi possível entrar");
            }
        }
    }

    function signOut(){
        localStorage.removeItem("@foodexplorer:token");
        localStorage.removeItem("@foodexplorer:user");

        setData({});
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(token && user){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        }
    }, []);

    async function userDish( { dish }){
        try {

            await api.get("/dish", dish);
            
        } catch (error) {
            console.log("deu ruim!")
        }
    }

    return(
        <AuthContext.Provider value={{
                signIn,
                user: data.user,
                signOut,
                userDish,
                isAdmin: data.isAdmin
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

//este é um hook
function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };