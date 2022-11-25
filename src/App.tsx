import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NoMatch from "./components/NoMatch";
import { getCurrentUser } from "./services/AuthService";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
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

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const auth = getCurrentUser();
  console.log(auth);
  return auth?.user ? children : <Navigate to="/login" replace />;
};
