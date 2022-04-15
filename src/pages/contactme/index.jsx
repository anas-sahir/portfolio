import { Box, Text, Flex, Icon, Wrap, WrapItem } from "@chakra-ui/react";
import TextEditor from "../../components/texteditor";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import socialMedia from "../../configs";
import { Gradient } from 'react-gradient';

function handleClick(icon) {
    console.log(icon);
    switch (icon) {
        case "BsFacebook":
            window.open(socialMedia.facebook);
            break;
        case "BsInstagram":
            window.open(socialMedia.instagram);
            break;
        case "BsTwitter":
            window.open(socialMedia.twitter);
            break;
        case "BsLinkedin":
            window.open(socialMedia.linkedin);
            break;
        case "BsGithub":
            window.open(socialMedia.github);
            break;
        case "SiGmail":
            window.open(socialMedia.gmail, "_blank");
            break;
        default:
            break;
    }
}
export default function ContactMe() {
    const sicon = { xxl: "120px", xl: "90px", lg: "80px", md: "70px", sm: "60px", base: "50px" };
    const menu = [BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub, SiGmail];
    const gradients = [['#E9EFF7', '#475464'], ['#163042', '#152631']];

    return (
        <Flex
            pl={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            pt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "8%", base: "8%" }}
            h={window.innerHeight}
            zIndex={10}
            align="center"
            justify="center"
        >
            <Wrap
                justify={"center"}
                w="90%"
                spacing={"6%"}
            >
                {menu.map((icon) => <WrapItem cursor={"pointer"} w={sicon} h={sicon} >
                    {(icon.name === "BsInstagram") ? <Gradient
                        gradients={gradients}
                        property="icons"
                        duration={2500}
                        angle="45deg"
                    >
                        <Icon as={icon} w={sicon} h={sicon}
                            // style={{ background: "linear-gradient(45deg, rgba(254,255,0,1) 8%, rgba(15,22,196,1) 36%, rgba(255,165,0,1) 59%, rgba(220,4,235,1) 89%)" }}
                            onClick={() => { handleClick(icon.name) }} />
                    </Gradient>
                        : <Icon as={icon} w="full" h="full" onClick={() => { handleClick(icon.name) }} />}
                </WrapItem>)}
            </Wrap>
        </Flex >
    );
}