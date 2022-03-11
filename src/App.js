import "./App.css";
import styled from "styled-components";
import Header from "./components/header/Header";
import CenterPanel from "./components/layout/split-screen/CenterPanel";
import LeftPanel from "./components/layout/split-screen/LeftPanel";
import RightPanel from "./components/layout/split-screen/RightPanel";
import SplitScreen from "./components/layout/split-screen/SplitScreen";

const HeaderElement = styled.header`
  flex: 1 0 100px;
  max-height: 100px;
  background-color: #fff;
  border-bottom: 2px solid #f3f3f5;
`;

const FooterElement = styled.footer`
  flex: 1 0 60px;
  max-height: 60px;
`;

const MainElement = styled.main`
  flex: 5;
`;

function App() {
  return (
    <div className="App">
      <HeaderElement>
        <Header />
      </HeaderElement>
      <MainElement>
        <SplitScreen children leftWeight={1} centerWeight={3} rightWeight={1}>
          <LeftPanel name={"menu"} />
          <CenterPanel name={"main"} />
          <RightPanel name={"side"} />
        </SplitScreen>
      </MainElement>
      <FooterElement>This is the footer</FooterElement>
    </div>
  );
}

export default App;
