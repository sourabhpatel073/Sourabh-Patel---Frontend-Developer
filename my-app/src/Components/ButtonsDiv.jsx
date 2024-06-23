import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";

function ButtonsDiv() {
  return (
    <Box
      width="1440px" // Fixed width
      height="288px" // Hug height translates to auto in CSS
      display="flex" // Flexbox for gap to be effective
      flexDirection="column" // Ensure children stack vertically
      position="absolute"
       gap="24px"
     >
     {/* first div */}
      <Box
        width="1881.01px"
        height="108px" // Ensuring the minimum height
        position="relative" // Position relative for left positioning
        left="0.46px" // Left offset
        padding="40px 0.01px 0px 0px" // Padding
        gap="24px" // Gap between child elements
        display="flex"
        flexDirection="row"
      >
        <Box
          w="98px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(91.84deg, rgba(128, 47, 126, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%);"
        >
          Avatar
        </Box>
        <Box
          w="194px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(92.08deg, rgba(43, 91, 117, 0.7) 0%, rgba(255, 255, 255, 0.09) 100%);"
        >
          Technology
        </Box>
        <Box
          w="98px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(92.05deg, rgba(128, 47, 126, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%);"
        >
          Design
        </Box>

        <Box
          w="289px"
          h="68px"
          fontSize="26px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="48px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(92.05deg, rgba(128, 47, 126, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%);"
        >
          <Text w="289px"> Artificial Intelligence</Text>
        </Box>
        <Box w="165px" h="68px" justifyContent="center">
          <Box
            w="163px"
            h="68px"
            fontWeight="400"
            fontSize="24px"
            fontStyle="outfit"
            position="relative"
            color="white"
            borderRadius="8px"
            fontFamily="Inter, sans-serif"
            lineHeight="16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(92.5deg, rgba(88, 61, 128, 0.7) 0%, rgba(255, 255, 255, 0.09) 100%)"
          >
            <Box>AI Chat Bot</Box>
          </Box>
        </Box>
        <Box w="192px" h="68px" justifyContent="center">
          <Box
            w="192px"
            h="68px"
            fontWeight="400"
            fontSize="24px"
            fontStyle="outfit"
            position="relative"
            color="white"
            borderRadius="8px"
            fontFamily="Inter, sans-serif"
            lineHeight="16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(91.85deg, rgba(122, 70, 79, 0.7) 0%, rgba(255, 255, 255, 0.09) 100%);"
          >
            <Box> Customizable</Box>
          </Box>
        </Box>

        <Box w="163px" h="68px">
          <Box
            w="131px"
            h="68px"
            fontWeight="400"
            fontSize="24px"
            fontStyle="outfit"
            position="relative"
            color="white"
            borderRadius="8px"
            fontFamily="Inter, sans-serif"
            lineHeight="16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(91.85deg, rgba(122, 70, 79, 0.7) 0%, rgba(255, 255, 255, 0.09) 100%);"
          >
            <Box> 3d Model</Box>
          </Box>
        </Box>
      </Box>
{/* second div */}
      <Box
        width="2045px" // Ensuring the maximum width
        height="156px" // Ensuring the minimum height
        position="relative" // Position absolute for top and left positionin
        left="-302.46px" // Left offset
        padding="0px 0px 64px 0px" // Padding
        gap="24px" // Gap between child elements
        display={"flex"}
        flexDirection={"rownpm "}
      >

     {/* box start */}
     <Box
        width="99.04px"
        height="99.04px"
        position="relative"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%) rotate(-13.67deg)"
       
        gap="0px"
        

      >
        <Box
          width="30.02px"
          height="27.86px"
          position="relative"
          top="12.57px"
          left="33.93px"
          // transform=" translate(-50%, -50%) rotate(-13.67deg)"
          gap="0px"
  

        />
        <Box
          width="31.26px"
          height="27.98px"
          position="absolute"
          top="50.15px"
          left="46.25px"
          gap="0px"
       
        />
        <Box
          width="40.24px"
          height="15.48px"
          position="absolute"
          top="79.13px"
          left="34.42px"
          transform="rotate(-13.67deg)"
          gap="0px"
        />
      </Box>

     {/* box end  */}
        <Box
          w="192px"
          h="68px"
          justifyContent="center"
        >
          <Box
            w="192px"
            h="68px"
            fontWeight="400"
            fontSize="20px"
            fontStyle="outfit"
            position="relative"
            color="white"
            borderRadius="8px"
            fontFamily="Inter, sans-serif"
            lineHeight="16px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="linear-gradient(91.85deg, rgba(122, 70, 79, 0.7) 0%, rgba(255, 255, 255, 0.09) 100%);"
          >
            <Box> Artificial Intelligence</Box>
          </Box>
        </Box>
        <Box
          w="129px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(92.08deg, rgba(43, 91, 117, 0.7) 0%, rgba(255, 255, 255, 0.09) 100%);"
        >
          People
        </Box>

        <Box
          w="202px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(90.75deg, rgba(128, 47, 126, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%)"
        >
          Create Videos
        </Box>

        <Box
          w="145px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(91.64deg, rgba(88, 61, 128, 0.7) 0%, rgba(255, 255, 255, 0.09) 100%);"
        >
          Analyze
        </Box>

        <Box
          w="145px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(91.41deg, rgba(43, 91, 117, 0.7) 0%, rgba(255, 255, 255, 0.09) 100%);"
        >
          Outfits
        </Box>

        <Box
          w="145px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(90.9deg, rgba(255, 255, 255, 0.1) 0%, rgba(128, 47, 126, 0.7) 100%);"
        >
          3d Model
        </Box>

        <Box
          w="154px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background="linear-gradient(91.42deg, rgba(255, 255, 255, 0.09) 0%, rgba(122, 70, 79, 0.7) 100%);"
        >
          Voice Chat
        </Box>

        <Box
          w="146px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background=" linear-gradient(91.52deg, rgba(255, 255, 255, 0.09) 0%, rgba(88, 61, 128, 0.7) 100%);"
        >
          Marketing
        </Box>

        <Box
          w="118px"
          h="68px"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          position="relative"
          color="white"
          borderRadius="8px"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          background=" linear-gradient(91.33deg, rgba(255, 255, 255, 0.09) 0%, rgba(122, 70, 79, 0.7) 100%);"
        >
          Realistic
        </Box>
      </Box>
    </Box>
  );
}

export default ButtonsDiv;
