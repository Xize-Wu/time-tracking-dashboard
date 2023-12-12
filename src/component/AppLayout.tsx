import { styled } from "styled-components";
import Profile from "./Profile";
import ActivityList from "./ActivityList";

const StyledLayout = styled.main`
  display: flex;
  width: 75%;
  height: 50%;
  justify-content: center;
  align-content: center;
  padding: 1em;

  @media(max-width: 768px){
    flex-direction: column;
    justify-content: center;
    padding: 0em;
    }
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
