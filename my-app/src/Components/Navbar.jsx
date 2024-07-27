import { Box } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box
      style={{
        width: "100%",
        height: "58px",
        position: "absolute",
        background: "rgba(0, 0, 0, 1)",
        alignItems: "center",
        marginLeft: "20px",
        zIndex: "1",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          width: "1200px",
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
          gap: "0px",
          alignItems: "center",
        }}
      >
        {/* left */}
        <Box
          style={{
            width: "444px",
            height: "26.5px",
            display: "flex",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          <Box
            style={{
              width: "116px",
              height: "25px",
              fontFamily: "Outfit",
              fontSize: "20px",
              fontWeight: "500",
              lineHeight: "25.2px",
              letterSpacing: " 0.5em",
              textAlign: "left",
              color: " rgba(255, 255, 255, 1)",
            }}
          >
            AI.GEN
          </Box>
          <Box
            style={{
              width: "280px",
              height: "26.5px",
              padding: "2px 0px 0px 0px",
              gap: "32px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* box1 */}
            <Box
              style={{
                width: "63px",
                height: "24.5px",
                fontFamily: "Outfit",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                color: " rgba(255, 255, 255, 1)",
              }}
            >
              Features
            </Box>
            {/* box2 */}
            <Box
              style={{
                width: "70px",
                height: "24.5px",
                fontFamily: "Outfit",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                color: " rgba(255, 255, 255, 1)",
                gap: "8px",
              }}
            >
              Roadmap
            </Box>
            {/* box3 */}
            <Box
              style={{
                width: "83px",
                height: "24px",
                fontFamily: "Outfit",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                textAlign: "left",
                color: " rgba(255, 255, 255, 1)",
              }}
            >
              Tokenomics
            </Box>
          </Box>
        </Box>

        {/* rigth */}
        <Box
  style={{
    width: "279px",
    height: "40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // Center items vertically in the outer Box
    fontSize: "16px",
    fontFamily: 'sans-serif',
    marginTop:'5px'
  }}
>
  <Box
    style={{
      color: "white",
      width: "100px",
      height: "30px",
      borderRadius: "10px",
      display: "flex", // Added to center items within this Box
      justifyContent: "center", // Center items horizontally within this Box
      alignItems: "center", // Center items vertically within this Box
      background: "#7C6F6C"
    }}
  >
    Whitepaper
  </Box>

  <Box
    style={{
      color: "white",
      width: "100px",
      height: "30px",
      borderRadius: "10px",
      display: "flex", // Added to center items within this Box
      justifyContent: "center", // Center items horizontally within this Box
      alignItems: "center", // Center items vertically within this Box
      background: "#8B59BA"
    }}
  >
    Get Started
  </Box>
</Box>

      </Box>
    </Box>
  );
}

export default Navbar;
