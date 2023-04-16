import { Navigate, Outlet } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth} from "../firebase";

const GirisYapmamisLayout = () => {
 const [user, isLoading] = useAuthState(auth);
 if(isLoading){
    return <h1>Loading...</h1>;
 }

    if(user) {
        return <Navigate to="/" replace/>; //giriş yapmışsa anasayfaya yönlendiriyoruz
    }

    return <Outlet/>;
};

export default GirisYapmamisLayout;