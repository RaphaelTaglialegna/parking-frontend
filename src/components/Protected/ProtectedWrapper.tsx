import { Navigate } from "react-router-dom";
import { getCurrentUser } from "../../services/AuthService";

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
  const auth = getCurrentUser();
  console.log(auth);
  return auth?.user ? children : <Navigate to="/login" replace />;
};

export default PrivateWrapper;
