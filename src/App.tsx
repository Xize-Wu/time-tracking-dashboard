import AppLayout from "./component/AppLayout";
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";
import { ActivityProvider } from "./context/activityContext";

const Wrapper = styled.div`
  display: grid;
  place-items: center;

  @media (min-width: 768px) {
    place-items: center;
    height: 100vh;
    width: 100vw;
  }

`;

function App() {
  return (
    <ActivityProvider>
    <Wrapper>
      <GlobalStyle />
      <AppLayout />
    </Wrapper>
    </ActivityProvider>
  );
}

export default App;
