import { Box } from "@chakra-ui/react";
import TextEditor from "../../components/texteditor";

export default function ContactMe() {
    return (
        <Box
            pl={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            pt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "8%", base: "8%" }}
            w="100%"
            zIndex={10}>
            <TextEditor />
        </Box >
    );
}