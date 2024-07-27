import { Box, Flex } from "@chakra-ui/react";
import { FlatTree } from "framer-motion";
import React from "react";

function SectionA() {
  return (
    <Box
      style={{
        width: "1257px",
        height: "1292px",
        position: "absolute",
        top: "72.42px",
        left: "0.46px",
       
      }}
    >
      <Box
        width="660px"
        height="auto"
        maxHeight="494.5px"
        position="absolute"
        top="127.58px"
        left="20.54px"
        gap="64px"
       
      >
        {/* top flex */}
        <Flex
          width="fit-content"
          maxWidth="315px"
          height="40px"
          gap="0px"
          padding="0.5px, 1px, 0.5px, 1px"
        >
          <Box width="16px" height="24px">
            🎉
          </Box>
          <Box
            Width="265px"
            height="auto"
            maxHeight="24.5px"
            padding="0px 0px 0.5px 0px"
            fontSize="16px"
            fontWeight="400"
            lineHeight="24px"
            textAlign="left"
            color="rgba(255, 255, 255, 1)"
            marginLeft="5px"
          >
            New in AI.GEN: Real Time Interaction
          </Box>
        </Flex>
        <Box>
          <Box Width="660px" Height="390.5px" gap="48px">
            <Box
              Width="660px"
              Height="118px"
              fontFamily="Outfit"
              fontSize="38px"
              fontWeight="500"
              lineHeight="59px"
              textAlign="left"
              color="white"
              fontStyle="sans-sarif"
            >
              IOTA polygon serum ipsum WAX terraUSD gala THETA.
            </Box>
            <Box
              Width="660px"
              Height="80.5px"
              fontFamily="Outfit"
              fontSize="18px"
              fontWeight="400"
              lineHeight="40px"
              textAlign="left"
              padding="0px, 0px, 0.5px, 0px"
              color="white"
            >
              Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor
              horizen ethereum quant bitcoin.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default SectionA;
