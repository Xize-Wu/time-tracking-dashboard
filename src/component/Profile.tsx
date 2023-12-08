import { styled, css } from "styled-components";

const StyledProfile = styled.div`
  padding-left: 20px;
  width: 15em;
`;


function Profile() {
  return <StyledProfile>
    Hi, I'm here!
  </StyledProfile>;
}

export default Profile