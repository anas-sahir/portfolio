import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import TextEditor from "../../components/texteditor";

export default function FeedBack() {

    return (
        <Flex
            ml={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            mt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "43px", base: "43px" }}
            px={10}
            h={window.innerHeight}
            zIndex={10}
            align="center"
            justify={"center"}
            letterSpacing={"wide"}
            flexDirection="column"
        >
            <TextEditor />
        </Flex >
    );
}