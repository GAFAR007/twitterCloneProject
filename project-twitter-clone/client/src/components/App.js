import React from "react";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import HomeFeed from "./HomeFeed";
import Profile from "./Profile";
import Notification from "./Notification";
import Bookmark from "./Bookmark";
import TwitterDetails from "./TwitterDetails";
import Home from "./Home";
// Styled component with flex styling
const AppContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <header className="App-header">
          <h1>Plexus</h1>
          <HomeFeed />
        </header>

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/notifications"
            element={<Notification />}
          />
          <Route
            path="/bookmarks"
            element={<Bookmark />}
          />
          <Route
            path="/tweet/:tweetId"
            element={<TwitterDetails />}
          />
          <Route
            path="/:profileId"
            element={<Profile />}
          />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
