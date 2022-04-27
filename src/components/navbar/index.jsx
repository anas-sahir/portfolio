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
import logo from "../../assets/avatar.jpg";
import useColor from "../../utils/useColor";
import color from "../../utils/color";
import {
    BsInfoCircle, BsBookHalf, BsCodeSlash, BsDot,
    BsPencilSquare, BsChatLeftText, BsHouseDoor
} from "react-icons/bs";
import routes from "../../configs/routes";
import { getCurrentPage, getPageIcon } from "../../handlers/index.jsx";
import navBarMenu from "../../configs/navbar";
import DrawerMenu from "./drawerMenu";
import Configurations from "../configurations";
import Scrollbars from 'react-custom-scrollbars';

export default function NavBar() {
    let [selected, setSelected] = useState(getCurrentPage());
    const { pick } = useColor();
    const navigate = useNavigate();
    const menu = [
        { id: 1, icon: BsHouseDoor, title: navBarMenu.home, path: routes.home },
        { id: 2, icon: BsInfoCircle, title: navBarMenu.cv, path: routes.cv },
        { id: 3, icon: BsBookHalf, title: navBarMenu.formation, path: routes.formation },
        { id: 4, icon: BsCodeSlash, title: navBarMenu.experiance, path: routes.experiance },
        { id: 5, icon: BsChatLeftText, title: navBarMenu.contact, path: routes.contact },
        { id: 6, icon: BsPencilSquare, title: navBarMenu.feedback, path: routes.feedback },
    ];

    return (<>
        <Box width="15%"
            h="100%"
            backgroundColor={pick("gray.300", "#15232D")}
            opacity={0.8}
            position="fixed"
            display={{ xxl: "flex", xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }}
            onLoadStart={() => { setSelected(getCurrentPage()) }}
        >
        </Box>
        <Box width="100%"
            zIndex={90}
            h="43px"
            backgroundColor={pick("gray.300", "#15232D")}
            opacity={0.8}
            position="fixed"
            display={{ xxl: "none", xl: "none", lg: "none", md: "none", sm: "flex", base: "flex" }}
        >
        </Box>
        <Flex
            position="fixed"
            backdropFilter={"auto"}
            backdropBlur="3px"
            width="15%"
            display={{ xxl: "flex", xl: "flex", lg: "flex", md: "flex", sm: "none", base: "none" }}
            height="100%"
        >

            <Wrap
                zIndex={100}
                fontWeight={"bold"}
                position="relative"
                letterSpacing={"wide"}
                w="100%"
            >
                <Flex flexDirection={"row"} >
                    <WrapItem
                        pt={5}
                        pl={5}
                        w="50%"
                    >
                        <Configurations />
                    </WrapItem>
                    {/* <WrapItem
                        // h="10px"
                        pt={5}
                        pr={5}
                        flexDirection="row-reverse"
                        w="50%"
                    >
                        <Box _hover={{ transform: "scale(1.2) rotate(30deg)" }}
                            transition="1s"
                        >
                            <ToggleDarkMode />
                        </Box>
                    </WrapItem> */}
                </Flex>
                <WrapItem w="100%"  >
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
                <Divider pt={15} />
                {/* computers/laptops */}
                <WrapItem display={{ xxl: "flex", xl: "flex", lg: "flex", md: "none", sm: "none", base: "none" }}
                >
                    <Wrap pt={15}
                        spacing='30px'
                    >
                        {menu.map((element) => (
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
                            >
                                <Wrap spacing='20px' >
                                    <HStack>
                                        <WrapItem alignItems="center">
                                            {/* {(icon === "home")
                        ? <AiOutlineHome />
                        : "a"} */}

                                            <Icon as={BsDot} fontSize="3xl"
                                                opacity={(selected === element.title) ? "1" : "0"}
                                            />
                                            <Icon as={element.icon} />
                                        </WrapItem>
                                        <WrapItem >
                                            <Text
                                                bgGradient={pick('linear(to-r, #242C37, #76869C)', 'linear(to-r, #E9EFF7, #475464)')}
                                                bgClip='text'>
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
                        {menu.map((element) => (
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
        {/* phones */}
        < Box
            h="43px"
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
                    <DrawerMenu />
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