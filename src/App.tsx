import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./routes/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} /> 
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
