import { Route, Routes } from "react-router-dom";
import Login from "../routes/Login.tsx";
import { ProtectedRoute } from "./ProtectedRoute.tsx";
import Layout from "./Layout.tsx";
import Agreements from "../routes/Agreements.tsx";

function App() {
  return (
      <Routes>
          <Route element={<ProtectedRoute />}>
              <Route element={<Layout />}>
                  <Route path="/" element={<Agreements />} />
              </Route>
          </Route>
          <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
