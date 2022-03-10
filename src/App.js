import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import CenterPanel from "./components/layout/split-screen/CenterPanel";
import LeftPanel from "./components/layout/split-screen/LeftPanel";
import RightPanel from "./components/layout/split-screen/RightPanel";
import SplitScreen from "./components/layout/split-screen/SplitScreen";

const HeaderElement = styled.header``;

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <SplitScreen children leftWeight={1} centerWeight={3} rightWeight={1}>
          <LeftPanel name={"menu"} />
          <CenterPanel name={"main"} />
          <RightPanel name={"side"} />
        </SplitScreen>
      </main>
      <footer>This is the footer</footer>
    </div>
  );
}

export default App;
