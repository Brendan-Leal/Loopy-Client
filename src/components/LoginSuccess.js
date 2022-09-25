import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import axios from "axios";

function LoginSuccess() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const res = await axios.get("http://localhost:5000/session-state", {
        withCredentials: true,
      });
      const user = res.data;
      setAuth(user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <p>
        Successfully logged in if you're not redirected soon{" "}
        <button onClick={handleClick}>click here</button>
      </p>
    </div>
  );
}

export default LoginSuccess;
