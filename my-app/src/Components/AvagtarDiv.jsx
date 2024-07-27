import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

function AvagtarDiv() {
  return (
    <Box
      width="1257px" // Fixed width to match "Hug" (fixed width)
      height="559px" // Fixed height to match "Hug" (fixed height)
      position="absolute" // Absolute positioning
      top="1499.14px" // Top offset
      left="0.04px" // Left offset
      padding="0px 4px 0px 4px" // Padding
      gap="32px" // Gap between child elements
      display="flex"
      flexDirection="row"
     
    >
      <Box
        width="616px"
        height="559px"
        padding="75.86px 0px 75.14px 0px"
        gap="0px"
       
        position="absolute"
      >
        <Box
          width="616px"
          height="559px"
          top="25.86px"
          left="0.04px"
          position="relative"
          gap="0px"
          borderRadius="16px 0px 0px 0px"
         
        >
          <Image src="Angle.png" w="616px" h="408px"></Image>
        </Box>
      </Box>
      <Box
        width="596px"
        height="302px"
        gap="32px"
        position="absolute"
        left="666px"
        top="150px"
       
      >
        <Box
          width="596px" // Fill width
          height="64px" // Hug height translates to auto in Chakra UI
          gap="0px" // Gap between child elements (if any)
          color="white"
          fontFamily="Outfit"
          fontSize="64px"
          fontWeight="600"
          lineHeight="64px"
          textAlign="left"
        >
          How it works
        </Box>
        <Text
          width="596px" // Fill width
          height="156px" // Hug height translates to auto in Chakra UI
          gap="0px" // Gap between child elements (if any)
          color="rgba(92, 195, 250, 1)"
          fontFamily="Outfit"
          fontSize="48px"
          fontWeight="400"
          lineHeight="64px"
          textAlign="left"
         
        >
          Select an Avatar
          <Text as={"span"} color="rgba(92, 100, 100, 1)" display="block">
            Create or Generate Script Select AI Boxes Voices Publish
          </Text>
        </Text>
      </Box>
    </Box>
  );
}

export default AvagtarDiv;
