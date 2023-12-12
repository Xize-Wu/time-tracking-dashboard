import { useState, useEffect } from "react";
import { styled } from "styled-components";
import ActivityComponent from "./activityList/ActivityComponent";

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
  const [activityArr, setActivityArr] = useState([]);


  useEffect(() => {
    fetch("../../data.json")
      .then((res) => res.json())
      .then((json) => setActivityArr(json))
      .catch((err) => {
        console.error("Error fetching activity data.");
        console.error(err);
      });
  }, []);
  return (
    <StyledList>
    {activityArr.map((ele, index) => (
      <ActivityComponent key={index} activityItem={ele} />
    ))}
    </StyledList>
  );
}

export default ActivityList;
