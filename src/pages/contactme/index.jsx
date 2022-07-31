import { Box, Text, Flex, Icon, Wrap, WrapItem } from "@chakra-ui/react";
import TextEditor from "../../components/texteditor";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { handleClick } from "../../handlers/index";
import { Gradient } from "react-gradient";

export default function ContactMe() {
    const sicon = { xxl: "120px", xl: "90px", lg: "80px", md: "70px", sm: "60px", base: "50px" };
    const menu = [{ id: 1, icon: BsFacebook }, { id: 2, icon: BsInstagram }, { id: 3, icon: BsTwitter },
    { id: 4, icon: BsLinkedin }, { id: 5, icon: BsGithub }, { id: 6, icon: SiGmail }];

    return (
        <Flex
            h={window.innerHeight}
            w="100%"
            zIndex={11}
            align="center"
            justify="center"
            letterSpacing={"wide"}
        >
            <Wrap
                justify={"center"}
                w="90%"
                spacing={"6%"}
                spacingY={"10%"}
            >
                {menu.map((element) => <WrapItem key={element.id} cursor={"pointer"} w={sicon} h={sicon} >
                    <Icon as={element.icon} w="full" h="full" onClick={() => { handleClick(element.icon) }} />
                </WrapItem>)}
            </Wrap>
        </Flex >
    );
}