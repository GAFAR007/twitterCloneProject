// Home.js

import React, {
  useEffect,
  useState,
} from "react";
import { useCritterContext } from "../CritterContext/CritterContext";
import {
  FaHeart,
  FaRetweet,
  FaComment,
} from "react-icons/fa6";
import styled from "styled-components";
import PostComponent from "./PostComponent";

// Styled components for better structure and readability
const TweetContainer = styled.li`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

const TweetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.strong`
  margin-right: 10px;
`;

const Timestamp = styled.span`
  color: #757575;
  font-size: 0.8rem;
`;

const TweetContent = styled.p`
  font-size: 1rem;
`;

const MediaContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TweetImage = styled.img`
  max-width: 70%;
  height: auto;
  border-radius: 8px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;

  button {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover {
      color: #1da1f2;
    }
  }
`;

const Home = () => {
  // Access homeFeed and loading state from the context
  const { homeFeed, loading } =
    useCritterContext();

  // useEffect to perform side effects when homeFeed changes
  useEffect(() => {
    // Additional logic related to the home feed can be added here
  }, [homeFeed]);

  // Local state to track liked tweets
  const [likedTweets, setLikedTweets] =
    useState({});

  // Handler function for the like action
  const handleLike = (tweetId) => {
    console.log(
      `Liked tweet with ID: ${tweetId}`
    );
    // Toggle the like state for the specific tweet ID
    setLikedTweets(
      (prevLikedTweets) => ({
        ...prevLikedTweets,
        [tweetId]:
          !prevLikedTweets[tweetId],
      })
    );
  };

  // Handler function for the retweet action
  const handleRetweet = (tweetId) => {
    console.log(
      `Retweeted tweet with ID: ${tweetId}`
    );
    // Additional logic for retweeting can be added here
  };

  // Handler function for the comment action
  const handleComment = (tweetId) => {
    console.log(
      `Commented on tweet with ID: ${tweetId}`
    );
    // Additional logic for commenting can be added here
  };

  return (
    <div>
      <h3>Home Feed</h3>
      <PostComponent />

      {loading ? (
        // Display a loading message when the home feed is loading
        <p>Loading...</p>
      ) : (
        // Render the tweet list when the home feed is available
        <ul>
          {homeFeed &&
            homeFeed.tweetIds.map(
              (tweetId) => {
                const tweet =
                  homeFeed.tweetsById[
                    tweetId
                  ];
                // Check if the tweet is liked based on the local state
                const isLiked =
                  likedTweets[
                    tweet.id
                  ] || false;

                return (
                  <TweetContainer
                    key={tweet.id}
                  >
                    <TweetHeader>
                      <UserInfo>
                        <UserName>
                          {
                            tweet.author
                              .displayName
                          }
                        </UserName>
                        <Timestamp>
                          {new Date(
                            tweet.timestamp
                          ).toLocaleString()}
                        </Timestamp>
                      </UserInfo>
                    </TweetHeader>
                    <TweetContent>
                      {tweet.status}
                    </TweetContent>
                    {tweet.media && (
                      <MediaContainer>
                        {tweet.media.map(
                          (
                            media,
                            index
                          ) => (
                            <TweetImage
                              key={
                                index
                              }
                              src={
                                media.url
                              }
                              alt={`Media ${index}`}
                            />
                          )
                        )}
                      </MediaContainer>
                    )}
                    <ActionButtons>
                      {/* Like button */}
                      <button
                        onClick={() =>
                          handleLike(
                            tweet.id
                          )
                        }
                        // Change the color based on the like state
                        style={{
                          color: isLiked
                            ? "#1da1f2"
                            : "inherit",
                        }}
                      >
                        <FaHeart
                          size={20}
                        />
                      </button>
                      {/* Retweet button */}
                      <button
                        onClick={() =>
                          handleRetweet(
                            tweet.id
                          )
                        }
                      >
                        <FaRetweet
                          size={20}
                        />
                      </button>
                      {/* Comment button */}
                      <button
                        onClick={() =>
                          handleComment(
                            tweet.id
                          )
                        }
                      >
                        <FaComment
                          size={20}
                        />
                      </button>
                    </ActionButtons>
                  </TweetContainer>
                );
              }
            )}
        </ul>
      )}
    </div>
  );
};

export default Home;
