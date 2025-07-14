import {BrowserRouter, Route, Routes} from "react-router";
import MainPage from "../pages/mainPage.tsx";
import './style.css'


const App = () => {
    return (
        <BrowserRouter>
           <Routes>
               <Route path="/" element={<MainPage/>} />
           </Routes>
        </BrowserRouter>
    );
};

export default App;