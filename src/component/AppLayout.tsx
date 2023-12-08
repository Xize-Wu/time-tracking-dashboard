import { styled, css } from "styled-components";
import Profile from "./Profile";
import ActivityList from "./ActivityList";

const StyledLayout = styled.main`
  display: flex;
  background-color: red;
  width: 75%;
  height: 50%;
  flex-basis:50%;
  justify-content: center;
  align-content: center;

`;

function AppLayout() {
  return (
    <StyledLayout>
      <Profile />
      <ActivityList />
    </StyledLayout>
  );
}

export default AppLayout;
