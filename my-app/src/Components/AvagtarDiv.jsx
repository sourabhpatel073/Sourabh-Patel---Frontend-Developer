import React from "react";
import { Box, Image,Text} from "@chakra-ui/react";

function AvagtarDiv() {
  return (
    <Box
      width="1452px" // Fixed width to match "Hug" (fixed width)
      height="659px" // Fixed height to match "Hug" (fixed height)
      position="absolute" // Absolute positioning
      top="1499.14px" // Top offset
      left="-164.04px" // Left offset
      padding="0px 4px 0px 4px" // Padding
      gap="32px" // Gap between child elements
      border="2px solid red"
      display="flex"
      flexDirection="row"
    >
      <Box
        width="816px"
        height="659px"
        padding="75.86px 0px 75.14px 0px"
        gap="0px"
        border="1px solid red"
        position="absolute"
      >
        <Box
          width="816px"
          height="508px"
          top="75.86px"
          left="0.04px"
          position="relative"
          gap="0px"
          borderRadius="16px 0px 0px 0px"
          border="1px solid white"
        >
          <Image src="Angle.png" w="816px" h="508px"></Image>
        </Box>
      </Box>
      <Box width="596px" height="352px" gap="32px" position="absolute" left='836px' top='250px' >
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
            border="2px solid whie"
          >
            How it works
     
          </Box>
          <Text

            width="596px" // Fill width
            height="256px" // Hug height translates to auto in Chakra UI
            gap="0px" // Gap between child elements (if any)
            color="rgba(92, 195, 250, 1)"
            fontFamily="Outfit"
            fontSize="48px"
            fontWeight="400"
            lineHeight="64px"
            textAlign="left"
            border="2px solid white"
           
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
