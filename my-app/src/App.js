import logo from "./logo.svg";
import "./App.css";
import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Box
        style={{
          width: "1440px",
          height: "14140.2px",
          gap: "0px",
          background: "rgba(0, 0, 0, 1)"
        }}
        border="1 px solid"
      ><Navbar/></Box>
    </div>
  );
}

export default App;
