import React from "react";
import styled from "styled-components";
import { useCritterContext } from "../CritterContext/CritterContext";
import {
  FaLocationDot,
  FaCalendar,
} from "react-icons/fa6";

// Styled components
const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ProfileHeader = styled.div`
  .container {
    position: relative;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  border: 4px solid #fff;
  position: absolute;
  left: 10px;
  top: 120px;
  z-index: 1;
`;

const Banner = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ProfileInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
`;

const DisplayName = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 2px;
`;

const Handle = styled.p`
  color: #697787;
  margin: 0;
`;

const Bio = styled.p`
  margin-bottom: 20px;
`;

const StatItem = styled.div`
  display: flex;

`;

const StatLabel = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

const StatValue = styled.p`
  color: #697787;
  margin: 0;

  span {
    padding-left: 10px;
    margin-right: 5px;
  }

  b {
    color: #262626;
    margin-right: 5px;
    margin-left: 5px;
  }
`;

const ProfileComponent = () => {
  const { profileData } =
    useCritterContext();

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <div className="container">
          <Banner
            src={profileData.bannerSrc}
            alt="Banner"
          />
          <Avatar
            src={profileData.avatarSrc}
            alt="Avatar"
          />
        </div>
        <DisplayName>
          {profileData.displayName}
        </DisplayName>
        <Handle>
          @{profileData.handle}
        </Handle>
        <Bio>{profileData.bio}</Bio>
        <div className="con">
          <StatItem>
            <StatValue>
              <div className="containterone">
                <span>
                  <FaLocationDot
                    size={20}
                    color="black"
                  />{" "}
                  {profileData.location}
                </span>
                <span>
                  <FaCalendar
                    size={20}
                    color="black"
                  />{" "}
                  {new Date(
                    profileData.joined
                  ).toLocaleString()}
                </span>
              </div>
              <div className="containertwo">
                {" "}
                <span>
                  <b>
                    {
                      profileData.numFollowing
                    }{" "}
                  </b>
                  Following
                </span>{" "}
                <span>
                  <b>
                    {
                      profileData.numFollowers
                    }{" "}
                  </b>
                  Followers
                </span>
              </div>
            </StatValue>
          </StatItem>
        </div>
      </ProfileHeader>

      <ProfileInfo>
     
          <StatLabel>Tweets</StatLabel>

          <StatLabel>Media</StatLabel>
      
      </ProfileInfo>
    </ProfileContainer>
  );
};

export default ProfileComponent;
