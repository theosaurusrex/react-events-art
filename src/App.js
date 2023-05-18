import { Route, Switch } from "react-router-dom";
// import MainMenu from "./components/MainMenu";

import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";



function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        {/* <MainMenu /> */}
        <Route path="/" exact>
          <AllMeetups />
        </Route>
        <Route path="/newmeetups">
          <NewMeetups />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
