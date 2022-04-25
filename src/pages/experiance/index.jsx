import { Flex, Grid, GridItem, Image, Text, Box, Center, HStack } from "@chakra-ui/react";
import bgPFE from "../../assets/bgPFE.png";

export default function Experaince() {
    const menu = [
        { "id": 1, "title": "PFE1", "context": bgPFE },
        { "id": 2, "title": "PFE2", "context": bgPFE },
        { "id": 3, "title": "PFE3", "context": bgPFE },
        // { "id": 4, "title": "PFE4", "context": bgPFE },
        // { "id": 5, "title": "PFE5", "context": bgPFE },
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
            <Flex w="95%" minH="90%"
                justify="center" align={"center"} gap={50}
                // gridTemplateColumns={{
                //     xxl: "repeat(" + ((menu.length >= 3) ? 3 : menu.length % 3) + ", 1fr)",
                //     xl: "repeat(" + ((menu.length >= 3) ? 3 : menu.length % 3) + ", 1fr)",
                //     // xl: "repeat(3, 1fr)",
                //     lg: "repeat(2, 1fr)", md: "repeat(2, 1fr)", sm: "repeat(1, 2fr)",
                //     base: "repeat(1, 1fr)"
                // }}
                bgColor="red"
            >
                {menu.map((element) => {
                    return (
                        <Flex key={element.id} flexDirection="column"
                            // maxWidth={"400px"} minWidth={"200px"}
                            // maxHeight={"150px"} minHeight={"300px"}
                            // w={{ xxl: "450px", xl: "330px", lg: "350px", md: "280px", sm: "200px", base: "180px" }}
                            // h={{ xxl: "400px", xl: "300px", lg: "325px", md: "220px", sm: "150px", base: "100px" }}
                            // mr={23}
                            // ml={23}
                            bgColor={"green.400"}
                        >
                            <Flex >
                                <Image src={element.context} borderRadius={"20px"} />
                            </Flex>
                            <Flex pt={3} pb={3} justify="center" >
                                <Text w="80%" align={"center"} fontWeight={"bold"} >
                                    {element.title}
                                </Text>
                            </Flex>
                        </Flex>
                    );
                })}
            </Flex>
        </Flex >
    );
}