import { Flex, Grid, GridItem, Image, Text, Box, Center, HStack, SimpleGrid } from "@chakra-ui/react";
import bgPFE from "../../assets/bgPFE.png";
import bgWordle from "../../assets/bgWordle.png";
import { Scrollbars } from 'react-custom-scrollbars';

export default function Experaince() {
    const menu = [
        { "id": 1, "title": "Projet de Fin d'Etude", "context": bgPFE },
        { "id": 2, "title": "Jeux Wordle", "context": bgWordle },
        // { "id": 3, "title": "PFE3", "context": bgPFE },
        // { "id": 4, "title": "PFE4", "context": bgPFE },
        // { "id": 5, "title": "PFE5", "context": bgPFE },
        // { "id":6, "title": "Game", "context": "Game" },
    ];
    return (

        <Flex
            ml={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            mt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "43px", base: "43px" }}
            pt="20px"
            w={{ xxl: "85%", xl: "85%", lg: "85%", md: "85%", sm: "100%", base: "100%" }}
            letterSpacing={"widest"}
            // align="center"
            justify="center"
            h={{ xxl: window.innerHeight, xl: window.innerHeight, lg: window.innerHeight, md: window.innerHeight, sm: window.innerHeight - 43, base: window.innerHeight - 43 }}
            zIndex={10}
        // mb={65}
        // flexDirection="column"
        >
            <Scrollbars  >

                <SimpleGrid justifyItems="center" alignItems={"center"}
                    gap={50} w="95%" minH="90%"
                    columns={{
                        xxl: (menu.length >= 3) ? 3 : menu.length % 3,
                        xl: (menu.length >= 3) ? 3 : menu.length % 3,
                        lg: 2, md: 2, sm: 1, base: 1
                    }}
                >
                    {menu.map((element) => {
                        return (
                            <Flex key={element.id} flexDirection="column"
                                maxWidth={"400px"} minWidth={"200px"}
                                maxHeight={"300px"} minHeight={"150px"}
                            // w={{ xxl: "450px", xl: "330px", lg: "350px", md: "280px", sm: "200px", base: "180px" }}
                            // h={{ xxl: "400px", xl: "300px", lg: "325px", md: "220px", sm: "150px", base: "100px" }}
                            >
                                <Flex
                                    w={{ xxl: "500px", xl: "450px", lg: "400px", md: "300px", sm: "300px", base: "250px" }}
                                    h={{ xxl: "300px", xl: "270px", lg: "250px", md: "200px", sm: "200px", base: "180px" }}
                                // bgColor="red"
                                >
                                    <Image src={element.context} borderRadius={"20px"} />
                                </Flex>
                                <Flex pt={3} pb={3} justify="center"
                                    w={{ xxl: "500px", xl: "450px", lg: "400px", md: "300px", sm: "300px", base: "250px" }}
                                >
                                    <Text w="80%" align={"center"} fontWeight={"bold"} >
                                        {element.title}
                                    </Text>
                                </Flex>
                            </Flex>
                        );
                    })}
                </SimpleGrid>
            </Scrollbars>
        </Flex >
    );
}