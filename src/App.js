import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import List from "./pages/list/List";
import New from "./pages/new/New";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" >
                <Route index element={<Home />} />
                <Route path="list" element={<List />} />
                <Route path="new" element={<New />} />
            </Route>
        </Routes>
    </div>
  );
}

export default App;
