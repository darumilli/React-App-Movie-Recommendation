import "./App.css";
import Home from "./Pages/Home";
import SearchResult from "./Pages/SearchResult";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search/:id" element={<SearchResult />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;