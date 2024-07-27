import { Box, Circle, Text } from "@chakra-ui/react";
import React from "react";

function Token() {
  return (
    <Box
      width="1257px" // Maximum width constrain
      height="905px" // Minimum height to ensure it hugs content but respects min height
      padding="40px 0px 0px 0px" // Padding top 40px, other sides 0px
      gap="64px" // Gap between child elements
      color={"white"}
    
    >
      <Box
        width="1300px" // Maximum width constraint
        height="auto" // Hug height, translates to auto in CSS
        minHeight="64px" // Minimum height to ensure it hugs content but respects min height
        padding="0px 40px 0px 40px" // Padding (top, right, bottom, left)
        gap="8px" // Gap between child elements
       
      >
        <Box
          width={"1400px"}
          h={"64"}
          color="rgba(250, 117, 248, 1)"
          fontWeight="400"
          fontSize="24px"
          fontStyle="outfit"
          borderRadius="8px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontFamily="Inter, sans-serif"
          lineHeight="16px"
        >
          Tokenomics
        </Box>

        <Box width={"1440"} height={"189"} gap={"77px"}>
          {/* one */}
          <Box
            width="1200px" // Maximum width constraint
            height="19px" // Minimum height to ensure it hugs content but respects min height
            gap="7px" // Gap between child elements
            display="flex"
            justifyContent={"space-between"}
            margin={"auto"}
          >
            <Box w="540px" h="63px">
              <Box
                w="540px"
                h="19px"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  Name
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  :
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  AI GEN
                </Text>
              </Box>
            </Box>

            <Box w="540px" h="63px">
              <Box
                w="540px"
                h="19px"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  Token Name
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  :
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                  color="rgba(255, 255, 255, 0.8);"
                >
                  $AIGEN
                </Text>
              </Box>
            </Box>
          </Box>

          {/* /two */}
          <Box
            width="1200px" // Maximum width constraint
            height="19px" // Minimum height to ensure it hugs content but respects min height
            gap="7px" // Gap between child elements
            display="flex"
            justifyContent={"space-between"}
            margin={"auto"}
          >
            <Box w="540px" h="63px">
              <Box
                w="540px"
                h="19px"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  Total Supply
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  :
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                  color={"rgba(255, 255, 255, 0.8);"}
                >
                  1B
                </Text>
              </Box>
            </Box>

            <Box w="540px" h="63px">
              <Box
                w="540px"
                h="19px"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  Circulating Supply
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  :
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                  color={"rgba(255, 255, 255, 0.8);"}
                >
                  1B
                </Text>
              </Box>
            </Box>
          </Box>

          {/* three */}
          <Box
            width="1200px" // Maximum width constraint
            height="19px" // Minimum height to ensure it hugs content but respects min height
            gap="7px" // Gap between child elements
            display="flex"
            justifyContent={"space-between"}
            margin={"auto"}
          >
            <Box w="540px" h="63px">
              <Box
                w="540px"
                h="19px"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                  marginLeft={"80px"}
                >
                  Contract
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  :
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                  color={"rgba(255, 255, 255, 0.8);"}
                >
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </Box>
            </Box>

            <Box w="540px" h="63px">
              <Box
                w="540px"
                h="19px"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
              >
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  Chain
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                >
                  :
                </Text>{" "}
                <Text
                  fontSize={"11px"}
                  fontFamily="Inter, sans-serif"
                  fontWeight={"400"}
                  color={"rgba(255, 255, 255, 0.8);"}
                >
                  Ethereum
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        Width="1400px" // Maximum width constraint
        height="auto" // Hug height, translates to auto in CSS
        minHeight="504px" // Minimum height to ensure it hugs content but respects min height
        padding="0px 80px 0px 80px" // Padding (top, right, bottom, left)
        gap="92px" // Gap between child elements
  
        display={"flex"}
        flexDirection={"row"}
        justifyItems={"center"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* left */}
        <Box
          width="577.59px" // Fixed width
          height="504px" // Fixed height
          gap="0px" // No gap between child elements
          borderRadius="25.67px 0px 0px 0px" // Border radius
         
          position={"relative"}
        >
          <Box
            width={"385px"}
            h={"385px"}
           
            position={"relative"}
            left="96px"
            top={"40px"}
            transform="rotate(90deg)"
          >
            <Box position="relative" width="385.06px" height="385.06px">
              <Box
                width="285.06px"
                height="285.06px"
                position="absolute"
                top="0"
                left="0"
                borderWidth="60px"
                borderStyle="solid"
                borderRadius="285.06px"
                color="rgba(255, 143, 52, 1)"
                borderRightColor="transparent"
                borderLeftColor="transparent"
                borderTopColor="transparent"
                transform="rotate(90deg)"
              />

              <Box
                width="285.06px"
                height="285.06px"
                position="absolute"
                top="0"
                left="0"
                borderWidth="60px"
                borderStyle="solid"
                borderRadius="285.06px"
                color="rgba(153, 52, 255, 1);"
                borderRightColor="transparent"
                borderLeftColor="transparent"
                borderTopColor="transparent"
                transform="rotate(-5deg)"
              />

              <Box
                width="285.06px"
                height="285.06px"
                position="absolute"
                top="0"
                left="0"
                borderWidth="60px"
                borderStyle="solid"
                borderRadius="585.06px"
                color="rgba(2, 141, 253, 1)"
                borderRightColor="transparent"
                borderLeftColor="transparent"
                borderTopColor="transparent"
                transform="rotate(-105deg)"
              />
             
              <Box
                width="170.06px"
                height="170.06px"
                position="absolute"
                top="-1"
                left="30"
                borderWidth="60px"
                borderStyle="solid"
                borderRadius="200.06px"
                color="rgba(190, 44, 44, 1)"
                borderRightColor="transparent"
                borderLeftColor="transparent"
                borderTopColor="transparent"
                transform="rotate(-180deg)"
              />
            </Box>
          </Box>
        </Box>

        {/* right */}
        <Box
          width="521px" // Fixed width
          height="336px" // Fixed height
          gap="0px" // No gap between child elements
          borderRadius="25.67px 0px 0px 0px" // Border radius
         color={'white'}
        >
        {/* /box1 */}
         <Box width={'520px'} height={'43px'} border={'1px solid #FFFFFF'} borderRadius={'20px'} display={'flex'} borderLeftColor={'#BE2C2C'} borderLeftWidth={'30px'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'}>
         <Box w={'254px'} >Partnership</Box>
        
         <Box w='147px' display={'flex'} alignItems={'center'} textAlign={'left'}><Text >:</Text><Text marginLeft={'10px'}>5% tokens</Text></Box>
         
         </Box>
{/* box2 */}
         <Box width={'520px'} height={'43px'} border={'1px solid #FFFFFF'} borderRadius={'20px'} display={'flex'} borderLeftColor={'#FF8F34'} borderLeftWidth={'30px'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'} marginTop={'20px'}>
         <Box w={'254px'} >LP Pool</Box>
        
         <Box w='147px' display={'flex'} alignItems={'center'} textAlign={'left'}><Text >:</Text><Text marginLeft={'10px'}>35% tokens</Text></Box>
         
         </Box>

         {/* box3 */}

         <Box width={'520px'} height={'43px'} border={'1px solid #FFFFFF'} borderRadius={'20px'} display={'flex'} borderLeftColor={'#9934FF'} borderLeftWidth={'30px'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'} marginTop={'20px'}>
         <Box w={'254px'} >Burned</Box>
        
         <Box w='147px' display={'flex'} alignItems={'center'} textAlign={'left'}><Text >:</Text><Text marginLeft={'10px'}>30% tokens</Text></Box>
         
         </Box>

         {/* box4 */}

         <Box width={'520px'} height={'43px'} border={'1px solid #9934FF'} borderRadius={'20px'} display={'flex'} borderLeftColor={'#028DFD'} borderLeftWidth={'30px'} justifyContent={'space-between'} flexDirection={'row'} alignItems={'center'} marginTop={'20px'}>
         <Box w={'254px'} >BNB LP Pool</Box>
        
         <Box w='147px' display={'flex'} alignItems={'center'} textAlign={'left'}><Text >:</Text><Text marginLeft={'10px'}>30% tokens</Text></Box>
         
         </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Token;
