import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/home/Home"));
const User = lazy(() => import("./pages/user/User"));
const NotFound = lazy(() => import("./pages/notFound/NotFound"));
const Profil = lazy(() => import("./pages/profil/Profil"));
const Reglage = lazy(() => import("./pages/reglage/Reglage"));
const Communaute = lazy(() => import("./pages/communaute/Communaute"));

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/reglage" element={<Reglage />} />
          <Route path="/communaute" element={<Communaute />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
