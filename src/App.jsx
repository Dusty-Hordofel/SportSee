import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import Profil from "./pages/profil/Profil";
import Reglage from "./pages/reglage/Reglage";
import Communaute from "./pages/communaute/Communaute";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/reglage" element={<Reglage />} />
          <Route path="/communaute" element={<Communaute />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
