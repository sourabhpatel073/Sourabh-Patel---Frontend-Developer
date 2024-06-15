import { Box } from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Box
      style={{
        width: "1440px",
        height: "32px",
        position: "absolute",
        top: "0.42px",
        left: "0.46px",
        gap: "0px",
        zIndex: "100px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
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
                backgroundColor: "#0a0a23",
                boxShadow: " 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12)",
                color: "#DFDEDF",
                zIndex:"100"
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
                padding: "0px, 0px, 0.5px, 0px",
                backgroundColor: "",
                borderRadius: "100px",
                backgroundColor: "#4C43CD",
                backgroundImage:
                  "radial-gradient(93% 87% at 87% 89%, rgba(0, 0, 0, 0.23) 0%, transparent 86.18%), radial-gradient(66% 87% at 26% 20%, rgba(255, 255, 255, 0.41) 0%, rgba(255, 255, 255, 0) 69.79%, rgba(255, 255, 255, 0) 100%)",
                boxShadow: "2px 19px 31px rgba(0, 0, 0, 0.2)",
                fontWeight: "bold",
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
