import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          {/* <Route path="/profil" element={<Profil/>} />
          <Route path="/reglage" element={<About data={accordionData} />} />
          <Route path="/communaute" element={<About data={accordionData} />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
