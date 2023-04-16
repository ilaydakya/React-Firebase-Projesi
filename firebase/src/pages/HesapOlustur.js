import { createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import { useCallback, useState } from "react";
import { auth } from "../firebase"; 
import { Link } from "react-router-dom";

const HesapOlustur = () => {
  const [isim, setIsim] =useState("");
  const [email, setEmail] = useState("");
  const [sifre, setSifre] = useState("");

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      console.log(email, sifre);

      if (!email || !sifre) {
        return;
      }

      createUserWithEmailAndPassword(auth, email, sifre)
      .then((auth) => {
        updateProfile(auth.user, {displayName: isim});
      })
      .catch((e) => {
          console.log(e);
        });
    },
    [isim, email, sifre]
  );

  return (
    <div className="max-w-md mx-auto py-20 bg-slate-500">
      <h1 className="text-4xl">Yeni Hesap Oluştur</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
        <input
          type="text"
          placeholder="İsim giriniz"
          className="p-4 bg-pink-200 rounded-md"
          value={isim}
          onChange={(e) => setIsim(e.currentTarget.value)}
        />
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
        <input type="submit" 
        className="p-4 bg-pink-500 rounded-md" 
        value="Hesap Oluştur"
        />
      <Link to="/giris-yap"> Hesabın var mı? Giriş yap</Link>
      </form>
    </div>
  );
};

export default HesapOlustur;