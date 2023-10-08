import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Profil from "./pages/profil/Profil";
import Reglage from "./pages/reglage/Reglage";
import Communaute from "./pages/communaute/Communaute";
import Home from "./pages/home/Home";
import User from "./pages/user/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/reglage" element={<Reglage />} />
        <Route path="/communaute" element={<Communaute />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
