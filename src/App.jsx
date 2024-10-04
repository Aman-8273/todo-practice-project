import Home from "./Home";
import TODOLIST from "./App.tsx";
import ProtectedRoute from "./ProtectedRoute.js";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/todo" element={<TODOLIST />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
