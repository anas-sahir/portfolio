import { Box, Button, Flex, Icon } from "@chakra-ui/react";
import TextEditor from "../../components/texteditor";

export default function FeedBack() {

    return (
        <Flex
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