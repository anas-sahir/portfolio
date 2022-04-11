import ToggleDarkMode from "../toggleDarkMode/index";
import {
    Stack,
    Box,
    // Image,
    Wrap,
    WrapItem,
    Text,
    Icon,
    Avatar,
    HStack
} from "@chakra-ui/react";
import logo from "../../assets/avatar.jpg";
import useColor from "../../utils/useColor";
import { Gradient } from 'react-gradient';
import { AiOutlineHome } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { BsBookHalf } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
// import { Flex } from "chakra-ui";
import { AiOutlineMenu } from 'react-icons/ai';

export default function NavBar() {
    const { pick } = useColor();
    const menu = [
        { id: 1, icon: AiOutlineHome, title: "accueil" },
        { id: 2, icon: BsInfoCircle, title: "CV" },
        { id: 3, icon: BsBookHalf, title: "Formation" },
        { id: 4, icon: BsCodeSlash, title: "Experiance" },
    ];

    return (<>
        <Box width="15%"
            h="100%"
            backgroundColor={pick("gray.300", "#15232D")}
            opacity={0.8}
            position="absolute"
            display={{ xxl: "flex", xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }}
        >
        </Box>
        <Box width="100%"
            h="8%"
            backgroundColor={pick("gray.300", "#15232D")}
            opacity={0.8}
            position="absolute"
            display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }}
        >
        </Box>
        <Wrap
            backdropFilter={"auto"}
            backdropBlur="4px"
            h="100%"
            width="15%"
            zIndex={100}
            fontWeight={"bold"}
            position="absolute"
            display={{ xxl: "flex", xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }}
        >
            <WrapItem w="100%"
                pt={5}
                pl={5}
            >
                <Box _hover={{ transform: "scale(1.2) rotate(30deg)" }}
                    transition="1s"
                >
                    <ToggleDarkMode />
                </Box>
            </WrapItem>
            <WrapItem w="100%">
                <Box w="100%" align="center">

                    <Avatar size={"2xl"} src={logo}
                        display={{ xxl: "flex", xl: "flex", lg: "none", md: "none", sm: "none", base: "none" }} />
                    <Avatar size={"xl"} src={logo}
                        display={{ xxl: "none", xl: "none", lg: "flex", md: "none", sm: "none", base: "none" }} />
                    <Avatar size={"lg"} src={logo}
                        display={{ xxl: "none", xl: "none", lg: "none", md: "flex", sm: "none", base: "none" }} />
                    <Avatar size={"md"} src={logo}
                        display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "none" }} />
                    <Avatar size={"sm"} src={logo}
                        display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "none", base: "flex" }} />
                </Box>
            </WrapItem>
            <WrapItem display={{ xxl: "flex", xl: "flex", lg: "flex", md: "none", sm: "none", base: "none" }} >
                <Wrap pt={30}
                    spacing='30px'
                >
                    {menu.map((element) => (
                        <Dash key={element.id} icon={element.icon}
                            title={element.title}
                        />))}
                </Wrap>
            </WrapItem>

            <WrapItem display={{ xxl: "none", xl: "none", lg: "none", md: "flex", sm: "none", base: "none" }} >
                <Wrap pt={30}
                    spacing='30px'
                >
                    {menu.map((element) => (
                        <DashTwo key={element.id} icon={element.icon}
                        />))}
                </Wrap>
            </WrapItem>
        </Wrap>
        <Box
            h="8%"
            w="100%"
            backdropFilter={"auto"}
            backdropBlur="4px"
            zIndex={100}
            fontWeight={"bold"}
            position="absolute"
            // backgroundColor={"red"}
            // align="center"
            display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }}
        >

            <HStack
                // justify="center"
                // backgroundColor={"green"}
                w="100%"
                h="100%"
            >

                <Stack w={19 / 20}
                    ml="5%">
                    <Avatar size={"xs"} src={logo} />
                </Stack>
                <Stack w={1 / 20}>
                    <Icon size={"xs"} as={AiOutlineMenu} />
                </Stack>
            </HStack>
            {/* <WrapItem display={{ xxl: "flex", xl: "flex", lg: "flex", md: "none", sm: "none", base: "none" }} >
                <Wrap pt={30}
                    spacing='30px'
                >
                    {menu.map((element) => (
                        <Dash key={element.id} icon={element.icon}
                            title={element.title}
                        />))}
                </Wrap>
            </WrapItem> */}
        </Box>
    </>);
}

function Dash({ icon, title }) {
    const gradients = [
        ['#E9EFF7', '#475464'],
        ['#163042', '#152631'],
    ];
    const { pick } = useColor();
    return (
        <WrapItem w="100%" pl={5}>
            <Wrap align="center"
                // justify="center"
                w="90%"
                spacing='20px'
            >
                <WrapItem>
                    {/* {(icon === "home")
                        ? <AiOutlineHome />
                        : "a"} */}
                    <Gradient
                        gradients={gradients}
                        property="text"
                        duration={2500}
                        angle="45deg"
                    >
                        <Icon as={icon} />
                    </Gradient>
                </WrapItem>
                <WrapItem >
                    <Text
                        bgGradient={pick('linear(to-r, #242C37, #76869C)', 'linear(to-r, #E9EFF7, #475464)')}
                        bgClip='text'>
                        {title}
                    </Text>
                    {/* <Gradient
                        gradients={gradients}
                        property="text"
                        duration={5000}
                        angle="45deg"
                    >
                        {title}
                    </Gradient> */}
                </WrapItem>
            </Wrap >
        </WrapItem >);
}

function DashTwo({ icon }) {
    return (
        <WrapItem w="100%">
            <Wrap align="center"
                justify="center"
                w="100%"
                spacing='20px'
            >
                <WrapItem>
                    {/* {(icon === "home")
                        ? <AiOutlineHome />
                        : "a"} */}
                    <Icon as={icon} w={6} h={6} />
                </WrapItem>
            </Wrap >
        </WrapItem >);
}