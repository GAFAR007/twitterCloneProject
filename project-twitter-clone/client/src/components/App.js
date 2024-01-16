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
import PostComponent from "./PostComponent";

// Styled component with flex styling
const AppContainer = styled.div`
  display: flex;
`;
const Header = styled.div`
  padding: 16px;
  width: 130px;
  height: 100%;
  border-right: 1px solid #ccc; /* Added border */
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Header>
          <h1>Plexus</h1>
          <HomeFeed />
        </Header>

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
            path="/myPost"
            element={<PostComponent />}
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
        {/* Add the PostComponent where you want it in your layout */}
      </AppContainer>
    </Router>
  );
}

export default App;
