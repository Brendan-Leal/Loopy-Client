import axios from "axios";
import { useLocation, Navigate, Outlet, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

function RequireAuth() {
  let { auth, setAuth } = useAuth();
  let location = useLocation();

  const navigate = useNavigate();

  const getToken = async () => {
    try {
      const res = await axios.get("http://localhost:5000/session-state", {
        withCredentials: true,
      });

      setAuth(res.data);
      navigate("/home");
    } catch (error) {
      if (error.response.status === 401) {
        navigate("/");
      }
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  if (auth.isAuthed) {
    return <Outlet />;
  } else {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
}
export default RequireAuth;
