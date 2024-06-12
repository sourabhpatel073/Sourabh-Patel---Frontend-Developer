import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'

function TopImages() {
  return (
    <Flex
    width="633.82px" 
    height="740.48px"
    position="absolute" 
    top="-93.45px" 
    left="860.82px" 
    gap="49px" 
   direction="row"
  >
    
    <Flex
      width="178.31px" 
      height="740.48px" 
      paddingTop="111px"
      paddingRight="0px" 
      paddingBottom="0px" 
      paddingLeft="0px" 
      gap="48.63px"
      direction="column" 
     
    >
    
     <Image
      width="178.31px" // Fixed width
      height="177.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="Elon-Musk.jpg"
     >

     </Image>

     <Image
      width="178.31px" // Fixed width
      height="177.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="bill gates.avif"
     >

     </Image>
     <Image
      width="178.31px" // Fixed width
      height="177.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="Buffett2.jpg"
     >

     </Image>
    </Flex>

    <Flex
      width="179.21px" 
      height="631.28px" 
      gap="47.73px" 
      direction="column" 
      border="1px solid green"
    >
      2
    </Flex>

    <Flex
      
      width="178.31px" 
      height="740.48px" 
      paddingTop="111px" 
      paddingRight="0px" 
      paddingBottom="0px" 
      paddingLeft="0px" 
      gap="48.63px" 
      direction="column" 
      border='1px solid white'
    >
      {/* Child elements go here */}
    </Flex>
  </Flex>
  )
}

export default TopImages
