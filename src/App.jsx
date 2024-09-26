import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/auth" />}
          />
          <Route
            path="/auth"
            element={isAuthenticated ? <Navigate to="/profile" /> : <Auth />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
