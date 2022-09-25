import { Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Layout() {
  const { auth, setAuth } = useAuth();

  // TODO: implement log in log out functionality
  const handleClick = () => {
    if (auth.isAuthed) {
      // Logout
    } else {
      // login
    }
  };
  if (auth.isAuthed) {
    return (
      <main>
        <h1>Loopy</h1>

        <button onClick={handleClick}>Logout</button>
        <Outlet />
      </main>
    );
  } else {
    return (
      <main>
        <h1>Loopy</h1>
        <a href="http://localhost:5000/auth/spotify">Login</a>
        <Outlet />
      </main>
    );
  }
}

export default Layout;
