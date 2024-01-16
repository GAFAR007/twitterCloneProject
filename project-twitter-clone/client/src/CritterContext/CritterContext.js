import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const CritterContext = createContext();

export const useCritterContext = () => {
  return useContext(CritterContext);
};

export const CritterContextProvider = ({
  children,
}) => {
  const [profileData, setProfileData] =
    useState("");
  const [tweetData, setTweetData] =
    useState(null);
  const [homeFeed, setHomeFeed] =
    useState(null);
     const [loading, setLoading] =
       useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const profileResponse =
          await fetch(
            "/api/me/profile"
          );
        const profileData =
          await profileResponse.json();
        setProfileData(
          profileData.profile
        );

        const homeFeedResponse =
          await fetch(
            "/api/me/home-feed"
          );
        const homeFeedData =
          await homeFeedResponse.json();
        setHomeFeed(homeFeedData);

        const tweetResponse =
          await fetch(
            "/api/tweet/:tweetId"
          );
        const tweetData =
          await tweetResponse.json();
        setTweetData(tweetData.tweet);

        setLoading(false);
      } catch (error) {
        console.error(
          "Error fetching data:",
          error
        );
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const contextValue = {
    profileData,
    tweetData,
    homeFeed,
    loading,
  };

  return (
    <CritterContext.Provider
      value={contextValue}
    >
      {children}
    </CritterContext.Provider>
  );
};
