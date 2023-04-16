import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
const SifremiUnuttum =() => { 
    const [email, setEmail] = useState("");
    const handleSubmit= useCallback(
        (e) =>{
            e.preventDefault();

            if (!email) {
                return;
            }

            sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Size bir sıfırlama emaili gönderdik. Lütfen emailinizi kontrol edin!");
            })
            .catch(() => {
                console.log(e);
            });
        }, 
        [email]
        );

    return(
        <div className="max-w-md mx-auto py-20 bg-slate-500">
            <h1 className="text-4xl">Şifremi Unuttum</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
                <input type="email" 
                placeholder="Email giriniz" 
                className="p-4 bg-pink-200 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <input type="submit" 
                value="Şifre sıfırlamak için email gönder"
                className="p-4 bg-pink-500 rounded-md"
                />
                <Link to="/giris-yap" className="italic text-inherit ">Giriş yap sayfasına geri dön</Link>
            </form>
        </div>
    ); 
    
};

export default SifremiUnuttum;