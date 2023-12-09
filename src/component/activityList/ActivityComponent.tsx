import { styled } from "styled-components";

import { useActivity } from "../../context/activityContext";
const StyledActivityName = styled.div`
  display: flex;
  justify-content: space-between;
  padding:1em;
  padding-bottom: 5px;
`;

const StyledTime = styled.div`
  font-size: 42px;
  padding-left: 0.4em;
  padding-top: 0.4em;

`;

const StyledTimeAccu = styled.div`
  font-size: 12px;
  padding-left: 1.5em;
  color: var(--note-text-color);
`;

const StyledCard = styled.div`
  position: relative;
  min-width: 12em;
  height: 10em;
  background-color: green;
  border-radius: 1em;
  margin: 2px;
`

const StyledContent = styled.div`
  min-width: 12em;
  height: 9em;
  background-color: var(--primary-activity-background-color);
  border-radius: 1em;
  transition: background-color 1s ease;

  top: 2.5rem;
  left: 0;
  position: relative;

  &:hover {
    background-color: var(--hover-activity-background-color); 

`

function ActivityComponent() {
  const {period} = useActivity();
  return (
    <StyledCard>
      <StyledContent>
        <StyledActivityName>
          <div>Work</div>
          <div>
            <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                fill="#BBC0FF"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </StyledActivityName>
        <StyledTime>32 hrs</StyledTime>
        <StyledTimeAccu>Last {period} - 36hrs</StyledTimeAccu>
      </StyledContent>

    </StyledCard>
  );
}

export default ActivityComponent;
