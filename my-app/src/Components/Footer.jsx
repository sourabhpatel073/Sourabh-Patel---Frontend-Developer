import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

function Footer() {
  return (
    <Box>
      <Box
        width="1440px"
        height="332px"
        border="1px solid red"
        display={"flex"}
        flexDirection={"row"}
        gap="43px"
      >
        <Box height={"638px"} w={"158.17px"} border={"1px solid red"}>
          <Image
            w={"158px"}
            h={"158px"}
            src="girl1.png"
            opacity={"50%"}
            margintop="40px"
          />
        </Box>
        <Box height={"638px"} w={"158.17px"} border={"1px solid red"}>
          {" "}
          <Image w={"158px"} h={"158px"} src="girl1.png" opacity={"50%"} />
        </Box>
        <Box height={"638px"} w={"158.17px"} border={"1px solid red"}>
          <Image
            w={"158px"}
            h={"158px"}
            src="girl1.png"
            opacity={"50%"}
            margintop="40px"
          />
        </Box>
        <Box height={"638px"} w={"158.17px"} border={"1px solid red"}>
          {" "}
          <Image w={"158px"} h={"158px"} src="girl1.png" opacity={"50%"} />
        </Box>
        <Box height={"638px"} w={"158.17px"} border={"1px solid red"}>
          <Image
            w={"158px"}
            h={"158px"}
            src="girl1.png"
            opacity={"50%"}
            margintop="40px"
          />
        </Box>
        <Box height={"638px"} w={"158.17px"} border={"1px solid red"}>
          {" "}
          <Image w={"158px"} h={"158px"} src="girl1.png" opacity={"50%"} />
        </Box>
        <Box height={"638px"} w={"158.17px"} border={"1px solid red"}>
          {" "}
          <Image w={"158px"} h={"158px"} src="girl1.png" opacity={"50%"} />
        </Box>
      </Box>
      <Box w={"1440px"} h={"800px"}>
        <Box
          w={"1000px"}
          height={"100px"}
          background="linear-gradient(90deg, #FF91A5 0%, #FA75F8 100%);"
          color="white"
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Box border={"1px solid red"}>
            <Text
              color={"white"}
              w={"250px"}
              h={"100px"}
              fontSize={"32px"}
              fontWeight={"400"}
            >
              Get Started
            </Text>
          </Box>
          <Box border={"1px solid red"} w={"100px"}>
            <Text
              as={ArrowForwardIcon}
              color="white"
              height={"100px"}
              w={"100px"}
              textAlign={"center"}
            />
          </Box>
        </Box>

        <Box
          width="1440px" // Fixed width
          height="549px" // Maximum height
          gap="0px"
          border="11px solid red" // Added for visualization, remove or adjust as needed
          position="absolute"
        >
          <Box
            width="1112px" // Fixed width
            height="auto" // Hug height (auto in CSS)
            minHeight="130px" // Minimum height to "hug" content
            position="relative" // Positioning
            top="124.5px" // Top offset
            left="64px" // Left offset
            gap="0px" // No gap between child elements
            display="flex" // Flex display to allow space-between justification
            justifyContent="space-between" // Space-between justification
            border="1px solid white" // Added for visualization, remove or adjust as needed
          >
            <Box w={"277px"} h={"126px"} color={"white"}>
              Dash dash terraUSD neo uniswap kadena helium avalanche polymath
              bancor.
            </Box>
            <Box w={"477px"} h={"126px"}>
              <Box
                color={"white"}
                fontSize={"11px"}
                w={"95%"}
                textAlign={"right"}
              >
                Looking for help?
              </Box>
              <Box
                w={"459px"}
                h="44px"
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
              >
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="flex-start"
                  color="white"
                  width="372px"
                  height="44px"
                  border="1px solid white"
                  borderRadius="8px"
                  paddingX="12px" // Padding for left and right
                >
                  <Text>Enter your Email</Text>
                </Box>
                <Button
                  w={"148px"}
                  height={"44px"}
                  background="linear-gradient(271.65deg, #FA75F8 0%, #9E6EE5 100%),
                      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));"
                  color={"white"}
                  borderRadius={"6px"}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
      width="1312px" // Fixed width
      height="2px" // Fixed height
      position="relative" // To use top and left properties
      top="424px" // Position from the top
      left="64px" // Position from the left
      gap="0px" // No gap between child elements
     
      backgroundColor="gray" // Optional: set a background color to see the box (remove this if not needed)
    />
      </Box>
    </Box>
  );
}

export default Footer;
