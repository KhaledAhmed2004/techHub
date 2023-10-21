import { useContext } from "react";
import { AuthContext } from "./../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivetRouter = ({ children }) => {
  const { user, lodaing } = useContext(AuthContext);
  if (lodaing) {
    return <span className="loading loading-spinner loading-md"></span>;
  }

  if (user) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
    </div>
  );
};

export default PrivetRouter;
