import { useContext } from "react";

import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import FavoritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = "";
  } else {
    content = (
      <span className={classes.badge}>{favoritesCtx.totalFavorites}</span>
    );
  }

  return (
    <header className={classes.header}>
      <div className={classes.topleftbanner}>
        <Link to="/">
          <div className={classes.logoandtext}>
            <svg className={classes.logo}></svg>
            <span className={classes.logotext}>My React App</span>
          </div>
        </Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">All Todos</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Todo</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              {content}
            </Link>
          </li>
          {/* <li>
            <Link to="/sign-up">Sign Up</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
