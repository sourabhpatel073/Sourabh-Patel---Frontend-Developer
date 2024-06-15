import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'

function TopImages() {
  return (
    <Flex
    width="580.82px" 
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
    >
   
    
     <Image
      width="178.31px" // Fixed width
      height="177.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="trump.avif"
     >

     </Image>

     <Image
      width="178.31px" // Fixed width
      height="177.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="mark.jpeg"
     >

     </Image>
     <Image
      width="178.31px" // Fixed width
      height="177.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="jack.jpeg"
     >

     </Image>
  
    </Flex>

    <Flex
      
      width="122.31px" 
      height="740.48px" 
      paddingTop="111px" 
      paddingRight="0px" 
      paddingBottom="0px" 
      paddingLeft="0px" 
      gap="48.63px" 
      direction="column" 
    
    >
       <Image
      width="122.31px" 
      height="177.41px" 
      borderRadius="21.61px 0px 0px 0px"
      src="biden.jpeg"
      box-shadow= "0px 18.01px 36.02px 0px rgba(14, 12, 71, 0.15)"

     >

     </Image>

     <Image
      width="122.31px" 
      height="177.41px" 
      borderRadius="21.61px 0px 0px 0px"
      src="ienstien.jpeg"
     >

     </Image>
     <Image
      width="122.31px" 
      height="177.41px" 
      borderRadius="21.61px 0px 0px 0px"
      src="random.jpeg"
     >

     </Image>
    </Flex>
  </Flex>
  )
}

export default TopImages
