import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import SectionA from "./Components/SectionA";
import TopImages from "./Components/TopImages";
import BottomImages from "./Components/BottomImages";
import AvagtarDiv from "./Components/AvagtarDiv";
import BottomDiv from "./Components/BottomDiv";
function App() {
  return (
    <div className="App">
      <Box
        style={{
          height: "7500.2px",
          background: "rgba(0, 0, 0, 1)",
         
        }}
       
      >
      <Navbar/>
        <SectionA/>
        <TopImages/>
        <BottomImages/>
        <AvagtarDiv></AvagtarDiv>
        <BottomDiv>          </BottomDiv>
      </Box>
    </div>
  );
}

export default App;
