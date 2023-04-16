import { useCallback, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const GirisYap = () => {
    const [email,setEmail]= useState("");
    const [sifre,setSifre]= useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();

            if (!email || !sifre) {
                return;
            }

            signInWithEmailAndPassword(auth, email, sifre).catch((e) => {
                console.log(e);
            });
        }, 
        [email,sifre]
        );

    return (
        <div className="max-w-md mx-auto py-20 bg-slate-500">
            <h1 className="text-4xl">Giriş Yap</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
                <input 
                type="email" 
                placeholder="Email giriniz" 
                className="p-4 bg-pink-200 rounded-md"
                value={email} 
                onChange={(e) => setEmail(e.currentTarget.value)}
                />

                <input 
                type="password" 
                placeholder="Şifre giriniz"
                className="p-4 bg-pink-200 rounded-md" 
                value={sifre}
                onChange={(e) => setSifre(e.currentTarget.value)}
                />

                <Link to="/sifremi-unuttum" className="ml-auto italic text-inherit ">
                Şifremi unuttum! 
                </Link>

                <input type="submit" 
                className="p-4 bg-pink-500 rounded-md"
                value="Giriş Yap"
                />
                <Link to="/hesap-olustur">Hesabın yok mu? Hesap oluştur</Link>
            </form>
        </div>
    );
};

export default GirisYap;