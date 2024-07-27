import { Box, Image } from "@chakra-ui/react";
import React from "react";

function AIDiv() {
  return (
    <Box w="1257px" h="1290px" marginBottom={'470px'}>
      <Box
        position="relative"
        top="380px"
        left={'12px'}
        width="1237px"
        height="1088px" // Hug height, translates to auto in CSS
        gap="12px" // Gap
        display="flex"
        flexDir="column"
        padding="0px, 3.5px, 0px, 3.5px"
       
      >
        {/* /first */}
        <Box
          width="1237px"
          height="528px" // Hug height, translates to auto in CSS
          padding="0px" // Padding
          gap="22px" // Gap
          
          display="flex"
          flexDir="row"
          color="white"
        >
          <Box
            width="525px"
            height="528px" // Hug height, translates to auto in CSS
            padding="0px" // Padding
            gap="24px"
           
          >
            <Image src="Ai.png" w={"100%"} h={"100%"}></Image>
          </Box>
          <Box
            width="752px"
            height="528px" // Hug height, translates to auto in CSS
            padding="0px" // Padding
            gap="24px"
           
          >
            <Image src="AiGirl.png" w={"100%"} h={"100%"}></Image>
          </Box>
        </Box>

        {/* /second */}
        <Box
          width="1237px"
          height="528px" // Hug height, translates to auto in CSS
          padding="0px" // Padding
          gap="12px" // Gap
         
          display="flex"
          flexDir="row"
          color="white"
        >
          <Box
            width="748px"
            height="528px" // Hug height, translates to auto in CSS
            padding="0px" // Padding
            gap="24px"
            
          >
            <Image src="script.png" w={"748px"} h={"528px"}></Image>
          </Box>
          <Box
            width="525"
            height="528px" // Hug height, translates to auto in CSS
            padding="0px" // Padding
            gap="24px"
         
          >
            <Image src="AiVoice.png" w={"100%"} h={"100%"}></Image>
          </Box>
        </Box>
      </Box>


    </Box>
  );
}

export default AIDiv;
