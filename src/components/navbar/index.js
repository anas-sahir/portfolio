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
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/avatar.jpg";
import useColor from "../../utils/useColor";
import { Gradient } from 'react-gradient';
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { BiMessageDetail } from 'react-icons/bi';
import { BsInfoCircle, BsBookHalf, BsCodeSlash } from "react-icons/bs";
import { ToAcceuil, ToCV } from "../../handlers";

export default function NavBar() {
    const { pick } = useColor();
    const menu = [
        { id: 1, icon: AiOutlineHome, title: "accueil", page: "/" },
        { id: 2, icon: BsInfoCircle, title: "CV", page: "/cv" },
        { id: 3, icon: BsBookHalf, title: "Formation", page: "/formation" },
        { id: 4, icon: BsCodeSlash, title: "Experiance", page: "/experiance" },
        { id: 5, icon: BiMessageDetail, title: "Me contacté", page: "/contact" },
    ];
    // const navigate = useNavigate();
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
        <Wrap maxBlockSize={20}
            backdropFilter={"auto"}
            backdropBlur="2px"
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
            <WrapItem w="100%" >
                <Box w="100%" align="center"  >

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
                            title={element.title} navigateTo={element.page}
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
            backdropBlur="2px"
            zIndex={100}
            fontWeight={"bold"}
            position="absolute"
            display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }}
        >
            <HStack
                w="100%"
                h="100%"
            >
                <Stack w={18 / 20}
                    ml="5%">
                    <Avatar size={"sm"} src={logo} />
                </Stack>
                <Stack w={2 / 20}>
                    <Icon as={AiOutlineMenu} />
                </Stack>
            </HStack>
        </Box>
    </>);
}

function Dash({ icon, title, navigateTo }) {
    const gradients = [
        ['#E9EFF7', '#475464'],
        ['#163042', '#152631'],
    ];
    const { pick } = useColor();
    const navigate = useNavigate();
    return (
        <WrapItem w="100%" pl={5} >
            <Wrap align="center"
                // justify="center"
                w="90%"
                spacing='20px'
            >
                <HStack
                    cursor="pointer"
                    onClick={() => {
                        navigate(navigateTo);
                    }}>
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
                </HStack>
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