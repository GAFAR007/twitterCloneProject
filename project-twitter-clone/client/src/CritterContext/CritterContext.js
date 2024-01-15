import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

// Create the context
const CritterContext = createContext();

// Custom hook to use the CritterContext
export const useCritterContext = () => {
  return useContext(CritterContext);
};

// CritterContextProvider component
export const CritterContextProvider = ({
  children,
}) => {
  // State to store profile data
  const [profileData, setProfileData] =
    useState(null);

  // State to store tweet data
  const [tweetData, setTweetData] =
    useState(null);

  // Effect to fetch profile data when the component mounts
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        // Fetch profile data from the Critter API
        const response = await fetch(
          "/api/me/profile"
        );
        const data =
          await response.json();
        // Update the state with the fetched profile data
        setProfileData(data.profile);
      } catch (error) {
        console.error(
          "Error fetching profile:",
          error
        );
      }
    };

    const fetchTweet = async () => {
      try {
        // Fetch tweet data from the Critter API
        const response = await fetch(
          "/api/tweet/:tweetId"
        );
        const data =
          await response.json();

          console.log(data);
        // Update the state with the fetched tweet data
        setTweetData(data.tweet);
      } catch (error) {
        console.error(
          "Error fetching tweet:",
          error
        );
      }
    };

    // Invoke the fetchProfile function
    fetchProfile();
    fetchTweet();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Context value containing the profile data
  const contextValue = {
    profileData,
    tweetData,
  };

  // Provide the context value to the wrapped components
  return (
    <CritterContext.Provider
      value={contextValue}
    >
      {children}
    </CritterContext.Provider>
  );
};
