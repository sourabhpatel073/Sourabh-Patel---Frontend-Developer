import { Box, Flex,Image } from '@chakra-ui/react'
import React from 'react'

function TopImages() {
  return (
    <Flex
    width="580.82px" 
    height="740.48px"
    position="absolute" 
    top="-93.45px" 
    left="680.82px" 
    gap="25px" 
   direction="row"
   paddingLeft={'50px'}

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
      width="148.31px" // Fixed width
      height="147.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="Elon-Musk.jpg"
      marginTop={'47px'}
     >

     </Image>

     <Image
      width="148.31px" // Fixed width
      height="147.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      marginTop={'20px'}
      src="https://s3-alpha-sig.figma.com/img/0dde/966a/cc37d31a73c3b33e6d759ed832dd92d7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UB0vNlfwrXrF9djHO64VY2Y6SaYSlj~tQukXzmtbXAsdLCGU~hIdpzwN1Pbipb8w3CuL4n-ajuBmMpIRz28pfcMWAp2pPY2VRSMi54LJKr20OD7QRBIOrXkfkeCsz1h-3E96rXgOhc-mM9EdJMJppTm8~NC9A6ZluAyc8zPIrU9EKDKHb6tWOL~arb9oFnjzl-fqcmvqM8Ot~v3nYf2bZc8k8fr1RoO3CwhaBKO30S1f~USiL-apuAewU2luUff9qyFMOMbWmHrIIOXhrVJxhNRjluehDk3H2aKR1uPqJdDEp1sXmNKAHT0nZWwcxhWC-rzeHOUCPmgMSHjFLIAUmQ__"
     >

     </Image>
     <Image
      width="148.31px" // Fixed width
      height="147.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="Buffett2.jpg"
      marginTop={'20px'}
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
      width="148.31px" // Fixed width
      height="177.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="trump.avif"
      marginTop={'40px'}
     >

     </Image>

     <Image
      width="148.31px" // Fixed width
      height="147.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="mark.jpeg"
      marginTop={'20px'}
      marginRight={'10px'}
     >

     </Image>
     <Image
      width="148.31px" // Fixed width
      height="147.41px" // Fixed height
      borderRadius="21.61px 0px 0px 0px"
      src="jack.jpeg"
      marginTop={'20px'}
    
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
      height="147.41px" 
      borderRadius="21.61px 0px 0px 0px"
      src="biden.jpeg"
      box-shadow= "0px 18.01px 36.02px 0px rgba(14, 12, 71, 0.15)"
      marginTop={'30px'}
     >

     </Image>

     <Image
      width="122.31px" 
      height="147.41px" 
      borderRadius="21.61px 0px 0px 0px"
      src="ienstien.jpeg"
      marginTop={'30px'}
     >

     </Image>
     <Image
      width="122.31px" 
      height="147.41px" 
      borderRadius="21.61px 0px 0px 0px"
      src="random.jpeg"
      marginTop={'30px'}
     >

     </Image>
    </Flex>
  </Flex>
  )
}

export default TopImages
