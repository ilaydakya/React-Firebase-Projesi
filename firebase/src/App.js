import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import HesapOlustur from "./pages/HesapOlustur";
import GirisYap from "./pages/GirisYap";
import SifremiUnuttum from "./pages/SifremiUnuttum";
import GirisYapmamisLayout from "./components/GirisYapmamisLayout";
import GirisYapmisLayout from "./components/GirisYapmisLayout";

const App = () => {  
  return (
    <Router>
      <Routes>
       <Route path="/" element={<GirisYapmisLayout/>}>
        <Route path= "/" element={<Home/>} />
       </Route>

       <Route path="/" element={<GirisYapmamisLayout />}>
        <Route path= "/hesap-olustur" element={<HesapOlustur />} />
        <Route path= "/giris-yap" element={<GirisYap />} />
        <Route path= "/sifremi-unuttum" element={<SifremiUnuttum />} />
       </Route>
     </Routes>
    </Router>
  );
};

export default App;