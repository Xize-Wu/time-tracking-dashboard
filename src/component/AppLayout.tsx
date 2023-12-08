import { styled, css } from "styled-components";
import Profile from "./Profile";
import ActivityList from "./ActivityList";

const StyledLayout = styled.main`
display: flex;
  background-color: transparent;
  padding:10em;
  border-radius: 25px;
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
