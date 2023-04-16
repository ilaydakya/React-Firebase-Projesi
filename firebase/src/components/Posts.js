import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import {db} from "../firebase";

const ref = collection(db, "mesaj");

const Posts = () => {
   const [data, isLoading] = useCollectionData(ref);

   if (isLoading) {
    return <h1> Loading...</h1>;
   }

   return (
    <div className="flex flex-col gap-4 mt-10">
        {data.map((mesaj) => (
            <div id={mesaj.id} className="p-4 rounded-md bg-pink-100">
                <p>{mesaj.body}</p>  
            </div>
       ))}
    </div>
   );
};

export default Posts;