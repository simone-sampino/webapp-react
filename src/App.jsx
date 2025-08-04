import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import SingleMoviePage from "./pages/SingleMoviePage";
import ComingSoonPage from "./pages/ComingSoonPage";
import TrailersPage from "./pages/TrailersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies/:id" element={<SingleMoviePage />}></Route>
            <Route path="/trailers" element={<TrailersPage />}></Route>
            <Route path="/coming-soon" element={<ComingSoonPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
