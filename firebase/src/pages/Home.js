import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { auth} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import Posts from "../components/Posts";
import AddPost from "../components/AddPost";

const Home = () => {
const [user, isLoading] = useAuthState(auth);

    const handleSignOut = useCallback(() => {
        signOut(auth);
    },[]);

    if(isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
    <div className="max-w-md py-12 mx-auto border-double border-4 border-gray-600">
        <div className="flex items-center justify-between">
            <div>
        <p className="text-xl text-gray-600">{user.displayName}</p>
        <p className="text-gray-400">{user.email}</p>
        </div>
        <button onClick={handleSignOut} className="p-2 bg-gray-400 rounded-md">Çıkış yap</button>
    </div>  
    <Posts /> 
    <AddPost />
    </div>
    );
};

export default Home;