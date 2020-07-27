import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";

import IndexRoute from "./routes/Index";
import CallbackRoute from "./routes/Callback";
import VoteRoute from "./routes/Vote";
import SettingsRoute from "./routes/Settings";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={IndexRoute} />
          <Route path="/callback" component={CallbackRoute} />
          <Route path="/vote" component={VoteRoute} />
          <Route path="/settings" component={SettingsRoute} />
        </div>
      </Router>
    </div>
  );
}

export default App;
