import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function Footer() {
  return (
    <Box
      background="radial-gradient(50% 50% at 50% 50%, rgba(92, 195, 250, 0.28) 0%, rgba(92, 195, 250, 0) 100%);"
      backgroundColor={"black"} zIndex={'1'}
    >
      <Box
        width="1257px"
        height="122px"
        display={"flex"}
        flexDirection={"row"}
        gap="43px"
        background="radial-gradient(50% 50% at 50% 50%, rgba(92, 195, 250, 0.28) 0%, rgba(92, 195, 250, 0) 100%);"
        paddingTop={"40px"}
        bodrder='10px solid red'
      >
        <Box height={"538px"} w={"138.17px"} paddingTop={"40px"}>
          <Image
            w={"158px"}
            h={"158px"}
            src="girl1.png"
            opacity={"50%"}
            margintop="40px"
          />
        </Box>
        <Box height={"538px"} w={"138.17px"}>
          {" "}
          <Image w={"158px"} h={"158px"} src="girl1.png" opacity={"50%"} />
        </Box>
        <Box height={"538px"} w={"138.17px"} paddingTop={"40px"}>
          <Image
            w={"158px"}
            h={"158px"}
            src="girl1.png"
            opacity={"50%"}
            margintop="40px"
          />
        </Box>
        <Box height={"538px"} w={"138.17px"}>
          {" "}
          <Image w={"158px"} h={"158px"} src="girl1.png" opacity={"50%"} />
        </Box>
        <Box height={"538px"} w={"138.17px"} paddingTop={"40px"}>
          <Image
            w={"158px"}
            h={"158px"}
            src="girl1.png"
            opacity={"50%"}
            margintop="40px"
          />
        </Box>
        <Box height={"538px"} w={"138.17px"}>
          {" "}
          <Image w={"158px"} h={"158px"} src="girl1.png" opacity={"50%"} />
        </Box>
        <Box height={"538px"} w={"138.17px"} paddingTop={"40px"}>
          {" "}
          <Image w={"158px"} h={"158px"} src="girl1.png" opacity={"50%"} />
        </Box>
      </Box>
      <Box w={"1257px"} h={"600px"}>
        <Box
          w={"1057px"}
          height={"100px"}
          background="linear-gradient(271.65deg, #FA75F8 0%, #9E6EE5 100%),
                      linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));"
          color="white"
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          margin={"auto"}
        >
          <Box>
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
          <Box w={"100px"}>
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
          width="1257px" // Fixed width
          height="549px" // Maximum height
          gap="0px"
          position="absolute"
        >
          <Box
            width="1212px" // Fixed width
            height="auto" // Hug height (auto in CSS)
            minHeight="130px" // Minimum height to "hug" content
            position="relative" // Positioning
            top="124.5px" // Top offset
            left="0px" // Left offset
            gap="0px" // No gap between child elements
            display="flex" // Flex display to allow space-between justification
            justifyContent="space-between" // Space-between justification
          >
            <Box
              w={"477px"}
              h={"226px"}
              color={"white"}
              fontSize={"30px"}
              lineHeight={"42px"}
              marginLeft={'30px'}
            >
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
                  borderRadius="8px"
                  paddingX="12px" // Padding for left and right
                  border="1px solid white"
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
          width="1057px" // Fixed width
          height="2px" // Fixed height
          position="relative" // To use top and left properties
          top="424px" // Position from the top
          left="100px" // Position from the left
          gap="0px" // No gap between child elements
          backgroundColor="gray" // Optional: set a background color to see the box (remove this if not needed)
        />

        {/* last box */}
        <Box
          width="1257px" // Fixed width
          minHeight="24px" // Minimum height
          height="auto" // Auto height to hug content
          top="459.5px" // Position from the top
          left="0px" // Position from the left
          display="flex" // Flexbox layout
          justifyContent="space-between" // Justify content with space between
          gap="0px" // No gap between child elements
          position="relative"
        >
          <Box
            width="288px" // Hug width with a minimum constraint of 188px
            height="15px" // Hug height with a minimum constraint of 15px
            display="flex" // Flexbox layout
            color={"white"}
            fontFamily="sans-serif"
            fontWeight={"400"}
            fontSize={"16px"}
            lineHeight={"16px"}
            marginLeft="20px"
          >
            AI. GEN
          </Box>
          <Box
            width="1124px" // Fixed width of 1124px
            height="auto" // Hug height, translates to auto in CSS
            minHeight="24px" // Minimum height of 24px
            padding="0px 0px 0px 850px" // Padding
            display="flex" // Flexbox layout
            gap="48px" // Gap between child elements
           
          >
            <Box
              width="24px"
              height="19.5px"
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box
                as={FaTwitter}
                color="white"
                boxSize="100%" // Ensures the icon fills the box
              />
            </Box>
            <Box
              width="24px"
              height="19.5px"
              position="relative"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="transparent" // Makes the box background transparent
            >
              <Box
                as={FaLinkedin}
                color="white"
                boxSize="100%" // Ensures the icon fills the box
              />
            </Box>
            <Box
              width="24px"
              height="19.5px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="transparent" // Makes the box background transparent
            >
              <Box
                as={FaInstagram}
                color="white"
                boxSize="100%" // Ensures the icon fills the box
              />
            </Box>
            <Box
              width="24px"
              height="19.5px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="transparent" // Makes the box background transparent
            >
              <Box
                as={FaYoutube}
                color="white"
                boxSize="100%" // Ensures the icon fills the box
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
