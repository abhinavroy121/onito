import {Route, Routes} from "react-router-dom";
import "./App.css";
import FormPage from "./pages/FormPage";
import TablePage from "./pages/TablePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<FormPage />} />
                <Route path="/usertable" element={<TablePage />} />
            </Routes>
        </div>
    );
}

export default App;
