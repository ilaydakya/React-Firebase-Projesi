import { Navigate, Outlet } from "react-router-dom";
import{useAuthState} from "react-firebase-hooks/auth";
import {auth} from "../firebase";

const GirisYapmisLayout = () => {
    const [user, isLoading] = useAuthState(auth);
    
    
    if(isLoading){ 
        return <h1>Loading...</h1> //kullanıcı beklerse loading mesajı
    } 

    if(!user) {
        return<Navigate to="/giris-yap" replace/>;//giriş yapmamışsa giriş yap sayfasına yönlendiriyoruz
    }
    return <Outlet/>;
};

export default GirisYapmisLayout;