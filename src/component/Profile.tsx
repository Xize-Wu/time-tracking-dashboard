import { styled, css } from "styled-components";
import jeremy from "../../images/image-jeremy.png";

const StyledProfile = styled.div`
  position: relative;
  margin-top: 7rem;

  width: 12em;
  height: 18em;
  border-radius: 1em;
  background-color: purple;

  display: flex;
  
`;

const StyledContent = styled.div`
  position: absolute;
  bottom: 7rem;
  padding-left: 1em;

  width: 11em;
  height: 18em;
  border-radius: 1em;
  background-color: blue;
`;

const StyledProfilePicture = styled.img`
  width: 25%;
  margin-top: 1em;
  margin-bottom: 3em;
  border: 2px solid white;
  border-radius: 50%;
`;

const StyledText = styled.div`
  padding-bottom: 0.5em;
`;

const StyledName = styled.div`
  font-size: 42px;
`;

const StyledLink = styled.ul`
  align-self: flex-end;
  display: flex;
  width: 11em;
  flex-direction: column;
  padding-bottom: 1.5em;
  text-align: left;
  padding-left: 1.5em;
`;

const StyledLinkItem = styled.div``;

function Profile() {
  return (
    <StyledProfile>
      <StyledContent>
        <StyledProfilePicture src={jeremy} alt="profile-picture" />
        <StyledText>Report for</StyledText>
        <StyledName>Jeremy Robson</StyledName>
      </StyledContent>
      <StyledLink>
        <StyledLinkItem>Daily</StyledLinkItem>
        <StyledLinkItem>Weekly</StyledLinkItem>
        <StyledLinkItem>Monthly</StyledLinkItem>
      </StyledLink>
    </StyledProfile>
  );
}

export default Profile;
