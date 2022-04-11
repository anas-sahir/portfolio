import { Box } from "@chakra-ui/react";
import TextEditor from "../../components/texteditor";
// import useColor from "../../utils/useColor";
// import { Gradient } from 'react-gradient';
// import TableSorted from "../../components/tableSorted/index.js";

export default function Home() {
    // const gradients = [
    //     ['#bd19d6', '#ea7d10'],
    //     ['#ff2121', '#25c668'],
    // ];
    // const { pick } = useColor();
    return (
        <Box
            pl={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            pt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "8%", base: "8%" }}
            w="100%"
            zIndex={10}>
            {/* <TableSorted /> */}
            {/* <Flex
                // w="85%"
                // h="100%"
                ml={"15%"}
                // mt={"5%"}
                zIndex={1}
                backgroundColor={pick("#edf2f7", "#1A202C")}
                opacity={pick("0.9", ".98")}
                _hover={{
                    opacity: 1,
                }}
            >
            </Flex> */}
            <TextEditor />

        </Box >
    );
}