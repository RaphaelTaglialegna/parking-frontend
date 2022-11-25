import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Login from "./components/Login/Login";
import Registration from "./components/Login/Registration";
import NoMatch from "./components/NoMatch";
import PrivateWrapper from "./components/Protected/ProtectedWrapper";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />

      <Route
        path="/"
        element={
          <PrivateWrapper>
            <Home />
          </PrivateWrapper>
        }
      />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
};

export default App;
