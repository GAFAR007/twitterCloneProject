import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  FaHome,
  FaUser,
  FaBell,
  FaBookmark,
  FaRss,
} from "react-icons/fa";

// Styled components
const Container = styled.div`
  display: flex;
`;

const Sidebar = styled.div`
  color: white;
  padding: 16px;
  width: 130px;
  border-right: 1px solid #ccc; /* Added border */
`;

const SidebarItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5; /* Hover background color */
  }

  &:active {
    background-color: #ddd; /* Clicked background color */
  }
`;

const Icon = styled.div`
  margin-right: 8px; /* Added space between icon and text */
`;

const Content = styled.div`
  padding-top: 16px;
`;

const Button = styled.button`
  background-color: #55acee;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #007bb5; /* Hover background color */
  }

  &:active {
    background-color: #005983; /* Clicked background color */
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: bold;
  transition: color 0.3s; /* Smooth color transition */

  &:hover {
    color: #55acee;
  }

  &:visited {
    color: black;
  }

  &:active {
    color: #007bb5;
  }
`;

const HomeFeed = () => {
  const handleButtonClick = () => {
    // Your onClick logic here
    console.log("Button Clicked!");
  };

  return (
    <Container>
      <Sidebar>
        <SidebarItem>
          <Icon>
            <FaHome
              size={20}
              color="black"
            />
          </Icon>
          <StyledLink to="/">
            Home
          </StyledLink>
        </SidebarItem>
        <SidebarItem>
          <Icon>
            <FaUser
              size={20}
              color="black"
            />
          </Icon>
          <StyledLink to="/profile">
            Profile
          </StyledLink>
        </SidebarItem>
        <SidebarItem>
          <Icon>
            <FaBell
              size={20}
              color="black"
            />
          </Icon>
          <StyledLink to="/notifications">
            Notification
          </StyledLink>
        </SidebarItem>
        <SidebarItem>
          <Icon>
            <FaBookmark
              size={20}
              color="black"
            />
          </Icon>
          <StyledLink to="/bookmarks">
            Bookmarks
          </StyledLink>
        </SidebarItem>

        <Content>
          {/* Your main content goes here */}
          <SidebarItem>
            <Icon>
              <FaRss
                size={20}
                color="black"
              />
            </Icon>
            <Button
              onClick={
                handleButtonClick
              }
            >
              Post
            </Button>
          </SidebarItem>
        </Content>
      </Sidebar>
    </Container>
  );
};

export default HomeFeed;
