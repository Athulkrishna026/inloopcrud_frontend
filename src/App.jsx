import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add"
          element={<AddEmployee />}
        />

        <Route
          path="/edit/:id"
          element={<EditEmployee />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;