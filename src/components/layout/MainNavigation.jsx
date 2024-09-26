import { Link, useNavigate } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";

const MainNavigation = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("isAuthenticated", isAuthenticated);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/auth");
  };

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        Authentication
      </Link>
      <nav className={classes.nav}>
        <ul>
          {isAuthenticated && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {!isAuthenticated && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isAuthenticated && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
