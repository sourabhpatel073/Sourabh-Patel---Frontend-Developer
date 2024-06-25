import { Box, List, ListItem, Image } from "@chakra-ui/react";
import React from "react";

function BottomLast() {
  return (
    <Box>
      <Box
        width="1440px" // Maximum width constrain
        height="1881px" // Minimum height to ensure it hugs content but respects min height
        padding="40px 0px 0px 0px" // Padding top 40px, other sides 0px
        gap="64px" // Gap between child elements
        color={"white"}
        border="1px solid red"
      >
        <Box
          width="1400px" // Maximum width constraint
          height="auto" // Hug height, translates to auto in CSS
          minHeight="64px" // Minimum height to ensure it hugs content but respects min height
          padding="0px 40px 0px 40px" // Padding (top, right, bottom, left)
          gap="8px" // Gap between child elements
          border="1px solid green"
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
            Roadmap
          </Box>
        </Box>

        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"1441px"}
          height={"503px"}
          gap={"100px"}
          marginBottom={"100px"}
        >
          <Box width={"528px"} height={"304px"} border={"1px solid red"}>
            <Box
              width={"177px"}
              height={"64px"}
              color={"rgba(250, 204, 105, 1)"}
            >
              PHASE 1
            </Box>
            <Box width={"528px"} height={"224px"}>
              <List spacing={3} itemType="ul" color={"white"}>
                <ListItem>
                  Horizen dai dai harmony dogecoin waves nexo.
                </ListItem>
                <ListItem>
                  Flow horizen waves dash tether zcash waves dash terraUSD.
                </ListItem>
                <ListItem>
                  Quant harmony amp cosmos PancakeSwap decentraland decred.
                </ListItem>
                <ListItem>Serum TRON solana tether holo crypto.</ListItem>
                <ListItem>Flow eCash amp EOS digibyte stellar.</ListItem>
              </List>
            </Box>
          </Box>
          <Box width={"637px"} height={"530px"} border={"1px solid red"}>
            <Image w={"629px"} height={"508px"} src="doller.png" />
          </Box>
        </Box>

        {/* phase2 */}

        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"1441px"}
          height={"503px"}
          gap={"100px"}
          marginBottom={"100px"}
        >
          <Box width={"528px"} height={"304px"} border={"1px solid red"}>
            <Box
              width={"177px"}
              height={"64px"}
              color={"rgba(250, 204, 105, 1)"}
            >
              PHASE 2
            </Box>
            <Box width={"528px"} height={"224px"}>
              <List spacing={3} itemType="ul" color={"white"}>
                <ListItem>
                  Horizen dai dai harmony dogecoin waves nexo.
                </ListItem>
                <ListItem>
                  Flow horizen waves dash tether zcash waves dash terraUSD.
                </ListItem>
                <ListItem>
                  Quant harmony amp cosmos PancakeSwap decentraland decred.
                </ListItem>
                <ListItem>Serum TRON solana tether holo crypto.</ListItem>
                <ListItem>Flow eCash amp EOS digibyte stellar.</ListItem>
              </List>
            </Box>
          </Box>
          <Box width={"637px"} height={"530px"} border={"1px solid red"}>
            <Image w={"629px"} height={"508px"} src="Avenger.png" />
          </Box>
        </Box>

        {/* phase-3 */}

        <Box
          display={"flex"}
          flexDirection={"row"}
          width={"1441px"}
          height={"503px"}
          gap={"100px"}
        >
          <Box width={"528px"} height={"304px"} border={"1px solid red"}>
            <Box
              width={"177px"}
              height={"64px"}
              color={"rgba(250, 204, 105, 1)"}
            >
              PHASE 3
            </Box>
            <Box width={"528px"} height={"224px"}>
              <List spacing={3} itemType="ul" color={"white"}>
                <ListItem>
                  Revain audius bitcoin revain PancakeSwap elrond ipsum
                  ethereum.{" "}
                </ListItem>
                <ListItem>
                  Waves TRON dogecoin bancor eCash quant secret.{" "}
                </ListItem>
                <ListItem>
                  Quant harmony amp cosmos PancakeSwap decentraland decred.
                </ListItem>
                <ListItem>
                  Celsius crypto bancor nexo litecoin decentraland crypto..
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box width={"637px"} height={"530px"} border={"1px solid red"}>
            <Image w={"629px"} height={"508px"} src="Tier.png" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default BottomLast;
