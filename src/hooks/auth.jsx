import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

const AuthContext = createContext({});

function AuthProvider({ children }){
    const [ data, setData ] = useState({});

    async function signIn({ email, password }){
       try {
           const response = await api.post("/sessions", { email, password });
           const { user, token } = response.data;

           localStorage.setItem("@RocketMovies:user", JSON.stringify(user));
           localStorage.setItem("@RocketMovies:token", JSON.stringify(token));

           api.defaults.headers.authorization = `Bearer ${token}`;
           setData({ user, token });

       } catch ( error ) {
           if( error.response ){
               alert(error.response.data.message);
           } else {
               alert("Não foi possível entrar!");
           }
       }
    }

    async function updateUser( {user, avatarFile} ){
        try{
            if( avatarFile ){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }

            await api.put("/users", user);
            localStorage.setItem("@RocketMovies:user", JSON.stringify(user));

            setData({user, token: data.token});
            alert("Usuário atualizado com sucesso!");
        } catch( error ){
            if( error ){
                alert( error.response.data.message );
            } else{
                alert("Não foi possivel atualizar os dados!");
            }
        }

    }

    function signOut(){
        const user = localStorage.removeItem("@RocketMovies:user");
        const token = localStorage.removeItem("@RocketMovies:token");

        setData({})
    }

    useEffect(() => {
        const user = localStorage.getItem("@RocketMovies:user");
        const token = localStorage.getItem("@RocketMovies:token");
        
        if( user && token){
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({
                user: JSON.parse(user),
                token
            })
        }
    }, []);

    return(
        <AuthContext.Provider value={{ 
            signIn, 
            updateUser, 
            signOut, 
            user: data.user 
        }}>
            { children }
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };