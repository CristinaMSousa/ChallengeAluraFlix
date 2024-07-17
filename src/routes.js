import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NovoVideo from "./pages/NovoVideo";
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import { VideoProvider } from "./components/VideoContext/VideoContext";

function AppRoutes() {
    return (
        <VideoProvider>
        <BrowserRouter>
        <Cabecalho/>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/NovoVideo" element={<NovoVideo/>}></Route>
            </Routes>
        <Rodape/>   
        </BrowserRouter>
        </VideoProvider>
    )
}

export default AppRoutes;