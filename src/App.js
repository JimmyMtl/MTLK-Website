import Navbar from "./common/Components/Navbar/Navbar";
import Footer from "./common/Components/Footer/Footer";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./common/Pages/Home/Home";
import AlertBar from "./common/Components/AlertBar/AlertBar";

function App() {
    return (
        <Router>
            {/*<AlertBar/>*/}
            <Navbar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
