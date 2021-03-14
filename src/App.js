import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

function App() {
  return (
    <div className="App container">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          exact
          path="/songs"
          render={(props) => <SongList {...props} />}
        />
        <Route path="/lyrics" render={(props) => <SongDetail {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
