import { styled, css } from "styled-components";

import { useActivity } from "../context/activityContext";

const StyledProfile = styled.div`
  position: relative;
  margin-top: 7rem;
  width: 12em;
  height: 18em;
  border-radius: 1em;
  background-color: purple;

  display: flex;

  @media (max-width: 768px) {
    margin-top: 0rem;
    position: static;
    padding: 0em;
    width: 100%;
    min-height: 10em;
    flex-direction: column;
    justify-content: flex-end;
    align-content: center;
  }
`;

const StyledContent = styled.div`
  position: absolute;
  bottom: 7rem;
  padding-left: 1em;

  width: 11em;
  height: 18em;
  border-radius: 1em;
  background-color: blue;

  @media (max-width: 768px) {
    position: static;
    padding: 0em;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
`;

const StyledProfilePicture = styled.img`
  width: 25%;
  margin-top: 1em;
  margin-bottom: 3em;
  border: 2px solid white;
  border-radius: 50%;
  @media (max-width: 768px) {
    margin-left: 0.5rem;
    height: 6rem;
    width: 6rem;
  }
`;

const StyledTextContent = styled.div`
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;

`;
const StyledText = styled.div`
  padding-bottom: 0.5em;
`;

const StyledName = styled.div`
  font-size: 42px;
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const StyledLink = styled.ul`
  align-self: flex-end;
  display: flex;
  width: 11em;
  flex-direction: column;
  padding-bottom: 1.5em;
  text-align: left;
  padding-left: 1.5em;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    gap: 1rem;
  }
`;

const StyledLinkItem = styled.div``;

function Profile() {
  const { period,changePeriod } = useActivity();

    return (
      <StyledProfile>
        <StyledContent>
          <StyledProfilePicture src={"../../public/images/image-jeremy.png"} alt="profile-picture" />
          <StyledTextContent>
            <StyledText>Report for</StyledText>
            <StyledName>Jeremy Robson</StyledName>
          </StyledTextContent>
        </StyledContent>
        <StyledLink>
        <StyledLinkItem onClick={() => changePeriod("Day")}>
            Daily
          </StyledLinkItem>
          <StyledLinkItem onClick={() => changePeriod("Week")}>
            Weekly
          </StyledLinkItem>
          <StyledLinkItem onClick={() => changePeriod("Month")}>
            Monthly
          </StyledLinkItem>
        </StyledLink>
      </StyledProfile>
    );
  };

export default Profile;
