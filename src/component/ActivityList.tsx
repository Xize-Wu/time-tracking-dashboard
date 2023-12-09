import { styled, css } from "styled-components";
import ActivityComponent from "./timeList/SingleActivity";

const StyledList = styled.ul`
  display: grid;
  max-width: 42rem;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  @media (max-width: 768px) {
    
    padding-top: 2rem;
    padding-left: 0rem;
    min-width: 100%;
    grid-template-columns: repeat(1, 1fr);
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
