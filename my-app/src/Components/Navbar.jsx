import { Box } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box
      style={{
        width: "1440px",
        height: "72px",
        position: "absolute",
        top: "0.42px",
        left: "0.46px",
        gap: "0px",
      }}
    >
      <Box
        style={{
          width: "1312px",
          height: "40px",
          display: "flex",
          justifyContent: "space-between",
          gap: "0px",
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
          }}
        >
          rigth 1{/*  */}
          <Box
            style={{
              width: "134px",
              height: "40px",
              borderRadius: "4px 0px 0px 0px",
              padding: "13px 24px 11px 24px",
             
            }}
          >
            <Box
              style={{
                width: "86px",
                height: "16.5px",
                fontFamily: "Outfit",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "16px",
                textAlign: "center",
                color: "white",
      
              }}
            >
              Whitepaper
            </Box>
          </Box>
          <Box
            style={{
              width: "133px",
              height: "40px",
              padding: "13px 24px 11px 24px",
            
            }}
          >
            <Box
              style={{
                width: "85px",
                height: "16.5px",
                fontFamily: "Outfit",
                fontSize: "16px",
                fontWeight: 500,
                lineHeight: "16px",
                textAlign: "center",
                color: "rgba(255, 255, 255, 1)",
                padding:"0px, 0px, 0.5px, 0px"
              }}
            >
              Get Started
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
