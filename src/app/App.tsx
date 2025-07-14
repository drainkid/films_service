import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "../pages/mainPage.tsx";
import './style.css'
import AboutFilmPage from "../pages/aboutFilmPage.tsx";
import FavoriteFilmsPage from "../pages/favoriteFilmsPage.tsx";


const App = () => {
    return (
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<MainPage/>} />
               <Route path="/movie/:id" element={<AboutFilmPage/>} />
               <Route path="/favorites" element={<FavoriteFilmsPage/>} />
           </Routes>
        </BrowserRouter>
    );
};

export default App;