import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CharaptersPage from "../pages/CharaptersPage/CharaptersPage";
import LocationsPage from "../pages/LocationsPage/LocationsPage";
import EpizodesPage from "../pages/EpizodesPage/EpizodesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/charapters",
        element: <CharaptersPage/>
    },
    {
        path: "/locations",
        element: <LocationsPage/>
    },
    {
        path: "/epizodes",
        element: <EpizodesPage/>
    }
]);
export default router