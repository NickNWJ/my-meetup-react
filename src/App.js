import { Route, Switch } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import SignUpPage from "./pages/SignUp";

import Layout from "./component/layout/Layout";

function App() {
  // localhost:3000/
  // blabla.com/
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
