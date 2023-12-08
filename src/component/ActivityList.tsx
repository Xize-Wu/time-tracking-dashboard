import { styled, css } from "styled-components";
import ActivityComponent from "./timeList/SingleActivity";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 42em;
  @media (max-width: 768px) {
    min-width: 100%;
    justify-content: space-evenly;
  }
`;

function ActivityList() {
  return (
    <StyledList>
      <ActivityComponent />
      <ActivityComponent />

      <ActivityComponent />
      <ActivityComponent />
      <ActivityComponent />
      <ActivityComponent />
    </StyledList>
  );
}

export default ActivityList;
