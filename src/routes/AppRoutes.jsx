import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
// import PetsPage from "../pages/PetsPage";
// import PetDetailsPage from "../pages/PetDetailsPage";
// import FavoritesPage from "../pages/FavoritesPage";
// import AboutPage from "../pages/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/pets" element={<PetsPage />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;