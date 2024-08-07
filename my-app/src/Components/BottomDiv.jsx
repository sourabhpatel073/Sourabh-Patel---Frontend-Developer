import { Box } from '@chakra-ui/react'
import React from 'react'
import AvagtarDiv from './AvagtarDiv'
import BottomImages from './BottomImages'
import ButtonsDiv from './ButtonsDiv'
import AIDiv from './AIDiv'
import Token from './Token'
import BottomLast from './BottomLast'
import Footer from './Footer'

function BottomDiv() {
  return (
    <Box
    width="1257px" // Fixed width
    height="5195px" // Ensuring the height will accommodate up to 5995px of content
    position="relative" // Position absolute for top positioning
    top="2254px" // Top offset
    display="flex" // Flexbox for gap to be effective
    flexDirection="column" // Ensure children stack vertically
    
  >
 <ButtonsDiv></ButtonsDiv>
 <AIDiv></AIDiv>
 <Token></Token>
 <BottomLast></BottomLast>
 <Footer></Footer>
  </Box>
  )
}

export default BottomDiv
