import { addDoc, collection } from "firebase/firestore";
import { useState,useCallback } from "react";
import { db } from "../firebase";

const ref =collection(db, "mesaj");

const AddPost = () => {
    const[body, setBody] = useState("");

    const handleSubmit = useCallback((e) => {
            e.preventDefault();
        addDoc(ref,{
            body: body,
        });
    },[body]);
    return (
        <div className="mt-10">
            <form onSubmit={handleSubmit} className="flex flex-row">
                <input type="text" 
                placeholder="Yazmak istediğin neler var?"
                className="bg-pink-300 text-black-900 rounded-md p-2 grow"
                value={body}
                onChange={(e) => setBody(e.currentTarget.value)}
                />
                <input type="submit" 
                value="Gönder"
                className="bg-pink-400 rounded-md p-2"
                />
            </form>
        </div>
    );
};

export default AddPost;