import { useState } from "react";
import ToggleDarkMode from "../toggleDarkMode/index";
import {
    Box,
    Wrap,
    WrapItem,
    Text,
    Icon,
    Avatar,
    HStack,
    Tooltip,
    Flex,
    Divider,
    Circle,
} from "@chakra-ui/react";
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/svg/undraw_male_avatar.svg";
import useColor from "../../utils/useColor";
import color from "../../utils/color";
import {
    BsInfoCircle, BsBookHalf, BsCodeSlash, BsDot,
    BsPencilSquare, BsChatLeftText, BsHouseDoor
} from "react-icons/bs";
import routes from "../../settings/routes";
import { getCurrentPage, getPageIcon } from "../../handlers/index.jsx";
import navBarMenu from "../../settings/navbar";
import AppSidebar from "./sidebar";
import Settings from "../settings";
import Scrollbars from 'react-custom-scrollbars';
import navbarSettings from "./conf";

export default function NavBar() {
    let [selected, setSelected] = useState(getCurrentPage());
    const { pick } = useColor();
    const navigate = useNavigate();

    return (<>
        <Box
            w={{ lg: navbarSettings.conf.width, md: navbarSettings.conf.smallWidth }}
            h="100%"
            backgroundColor={pick("gray.300", "#15232D")}
            opacity={0.8}
            position="fixed"
            display={{ md: "flex", base: "none" }}
            onLoadStart={() => { setSelected(getCurrentPage()) }}
        >
        </Box>
        {/* mobile */}
        <Box width="100%"
            zIndex={90}
            h={navbarSettings.conf.height}
            backgroundColor={pick("gray.300", "#15232D")}
            opacity={0.8}
            position="fixed"
            display={{ md: "none", base: "flex" }}
        >
        </Box>
        <Flex
            zIndex={100}
            position="fixed"
            backdropFilter={"auto"}
            backdropBlur="3px"
            w={{ lg: navbarSettings.conf.width, md: navbarSettings.conf.smallWidth }}
            display={{ md: "flex", base: "none" }}
            height="100%"
            overflow="hidden"
        >

            <Wrap
                zIndex={100}
                fontWeight={"bold"}
                position="relative"
                letterSpacing={"wide"}
                w="100%"
                overflowX="auto"
            >
                <Flex flexDirection={"row"} >
                    <WrapItem pt={5} pl={5}>
                        <Settings />
                    </WrapItem>
                </Flex>
                <WrapItem w="100%">
                    <Box w="100%" align="center" px={{ lg: "50px", md: "30px" }} >
                        <Avatar src={logo} boxSize="fit-content" />
                    </Box>
                </WrapItem>

                {/* computers/laptops */}
                <WrapItem display={{ xxl: "flex", xl: "flex", lg: "flex", md: "none", sm: "none", base: "none" }}
                >
                    <Wrap pt={"30px"}
                        spacing='30px'
                    >
                        {navbarSettings.link.map((element) => (
                            // <Dash key={element.id} icon={element.icon}
                            //     title={element.title} navigateTo={element.path}
                            // />
                            <WrapItem key={element.id}
                                w="100%"
                                cursor="pointer"
                                onClick={() => {
                                    setSelected(element.title);
                                    navigate(element.path);
                                }}
                                _hover={{ transform: "scale(1.2) " }}
                                transition="1s"
                                color={(selected === element.title) && "#6C63FF"}
                                pl="30px"
                            >
                                <Wrap spacing='20px'>
                                    <HStack>
                                        <WrapItem alignItems="center">
                                            {/* <Icon as={BsDot} fontSize="3xl"
                                                opacity={(selected === element.title) ? "1" : "0"}
                                            /> */}
                                            <Icon as={element.icon} />
                                        </WrapItem>
                                        <WrapItem >
                                            <Text
                                            // bgGradient={pick('linear(to-r, #242C37, #76869C)', 'linear(to-r, #E9EFF7, #475464)')}
                                            // bgClip='text'
                                            >
                                                {element.title}
                                            </Text>
                                        </WrapItem>
                                    </HStack>
                                </Wrap >
                            </WrapItem >
                        ))}
                    </Wrap>
                </WrapItem>
                {/* tablets/phones */}
                <WrapItem display={{ xxl: "none", xl: "none", lg: "none", md: "flex", sm: "none", base: "none" }}
                    w="100%">
                    {/* <Scrollbars style={{ width: 120, height: 300 }}> */}
                    <Wrap pt={30} spacing='30px' >
                        {navbarSettings.link.map((element) => (
                            // <DashTwo key={element.id} icon={element.icon} navigateTo={element.path}/>
                            <WrapItem key={element.id} w="100%" cursor="pointer"
                                onClick={() => {
                                    setSelected(element.title);
                                    navigate(element.path);
                                }}
                                _hover={{ transform: "scale(1.5) " }}
                                transition="1s"
                            >
                                <Tooltip hasArrow label={element.title}
                                    placement='right-end' fontSize={20}>
                                    <Wrap align="center" justify="center"
                                        w="80%" spacing='20px' >
                                        <WrapItem>
                                            <Icon as={BsDot} fontSize="3xl"
                                                opacity={(selected === element.title) ? "1" : "0"}
                                            />

                                            <Icon as={element.icon} w={6} h={6} />
                                        </WrapItem>
                                    </Wrap >
                                </Tooltip>
                            </WrapItem >
                        ))}
                    </Wrap>
                    {/* </Scrollbars> */}
                </WrapItem>
            </Wrap >
        </Flex >
        {/* mobile */}
        < Box
            h={navbarSettings.conf.height}
            w="100%"
            backdropFilter={"auto"}
            backdropBlur="2px"
            zIndex={100}
            fontWeight={"bold"}
            position="fixed"
            display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }
            }
        >
            <HStack
                w="100%"
                h="100%"
                flexDirection={"row"}
            >
                <Flex w={9 / 10} align="center" justify={"center"}>
                    <Icon as={getPageIcon()} />
                    <Text ml={3}>
                        {getCurrentPage()}
                    </Text>
                </Flex>
                <Flex w={1 / 10} h="100%" align={"center"}>
                    <AppSidebar />
                </Flex >
            </HStack>
        </Box >
    </>);
}

// function Dash({ icon, title, navigateTo }) {
//     const { pick } = useColor();
//     const navigate = useNavigate();
//     return (
//         <WrapItem w="100%" pl={5}
//             justifyContent="end">
//             <Wrap
//                 w="90%" // weard, but it does the job 😉
//                 spacing='20px'
//             >
//                 <HStack
//                     cursor="pointer"
//                     onClick={() => {
//                         navigate(navigateTo);
//                     }}>
//                     <WrapItem >
//                         {/* {(icon === "home")
//                         ? <AiOutlineHome />
//                         : "a"} */}
//                         <Icon as={icon} />
//                     </WrapItem>
//                     <WrapItem >
//                         <Text
//                             bgGradient={pick('linear(to-r, #242C37, #76869C)', 'linear(to-r, #E9EFF7, #475464)')}
//                             bgClip='text'>
//                             {title}
//                         </Text>
//                         {/* <Gradient
//                         gradients={gradients}
//                         property="text"
//                         duration={5000}
//                         angle="45deg"
//                     >
//                         {title}
//                     </Gradient> */}
//                     </WrapItem>
//                 </HStack>
//             </Wrap >
//         </WrapItem >);
// }

// function DashTwo({ icon, navigateTo }) {
//     const navigate = useNavigate();
//     return (
//         <WrapItem w="100%">
//             <Wrap align="center"
//                 justify="center"
//                 w="100%"
//                 spacing='20px'
//             >
//                 <WrapItem
//                     cursor="pointer"
//                     onClick={() => {
//                         navigate(navigateTo);
//                     }}>
//                     {/* {(icon === "home")
//                         ? <AiOutlineHome />
//                         : "a"} */}
//                     <Icon as={icon} w={6} h={6} />
//                 </WrapItem>
//             </Wrap >
//         </WrapItem >);
// }