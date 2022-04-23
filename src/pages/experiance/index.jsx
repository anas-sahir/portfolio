import { Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import bgPFE from "../../assets/bgPFE.png";

export default function Experaince() {
    const menu = [
        { "id":1, "title": "PFE", "context": bgPFE },
        { "id":2, "title": "PFE", "context": bgPFE },
        { "id":3, "title": "PFE", "context": bgPFE },
        // { "id":4, "title": "PFE4", "context": bgPFE },
        // { "id":5, "title": "PFE5", "context": bgPFE },
        // { "id":6, "title": "Game", "context": "Game" },
    ];
    return (

        <Flex
            ml={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            mt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "43px", base: "43px" }}
            w={{ xxl: "85%", xl: "85%", lg: "85%", md: "85%", sm: "100%", base: "100%" }}
            letterSpacing={"widest"}
            align="center"
            justify="center"
            h={{ xxl: window.innerHeight, xl: window.innerHeight, lg: window.innerHeight, md: window.innerHeight, sm: window.innerHeight - 43, base: window.innerHeight - 43 }}
            zIndex={10}
        // mb={65}
        // flexDirection="column"
        >
            {/* <Grid
                gap={65} w="95%" h="90%"
                justifyItems={"center"}
                alignItems="center"
                templateColumns={{
                    xxl: "repeat(" + ((menu.length >= 3) ? 3 : menu.length % 3) + ", 1fr)",
                    xl: "repeat(" + ((menu.length >= 3) ? 3 : menu.length % 3) + ", 1fr)",
                    // xl: "repeat(3, 1fr)",
                    lg: "repeat(2, 1fr)", md: "repeat(2, 1fr)", sm: "repeat(1, 1fr)",
                    base: "repeat(1, 1fr)"
                }}
            >
                {menu.map((element) => {
                    return (<GridItem key={element.id} maxWidth={"400px"} minWidth={"200px"}>
                        <Flex>
                            <Image src={element.context} fit="cover" borderRadius={"20px"} />
                        </Flex>
                        <Flex pt={5} justify="center" fontWeight={"bold"} >
                            <Text w="80%" align={"center"}>
                                {element.title}
                            </Text>
                        </Flex>
                    </GridItem>);
                })}
            </Grid> */}
        </Flex >
    );
}