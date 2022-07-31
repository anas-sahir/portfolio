import React from "react";
import {
  Drawer, DrawerBody, DrawerHeader, DrawerOverlay,
  DrawerContent, DrawerCloseButton, useDisclosure,
  Icon, Avatar, Wrap, WrapItem, HStack,
} from "@chakra-ui/react";
import {
  BsDot,
  // BsInfoCircle, BsBookHalf, BsCodeSlash, 
  // BsPencilSquare, BsChatLeftText, BsHouseDoor
} from "react-icons/bs";
import { getCurrentPage } from "../../../handlers/index";
import useColor from "../../../utils/useColor";
import logo from "../../../assets/svg/undraw_male_avatar.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Settings from "../../settings";
import navbarSettings from "../conf";

export default function AppSidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let [selected, setSelected] = React.useState(getCurrentPage());
  const { pick } = useColor();
  const navigate = useNavigate();

  return (<>
    <Icon as={AiOutlineMenu} h="50%" w="auto" cursor={"pointer"} onClick={onOpen} />
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader >
          <Settings />
        </DrawerHeader>
        <DrawerHeader align={"center"} >
          <Avatar size={"xl"} src={logo} />
        </DrawerHeader>
        <DrawerBody>
          <Wrap pt={30}
            spacing='30px'
          >
            {navbarSettings.link.map((element) => (
              // <Dash key={element.id} icon={element.icon}
              //     title={element.title} navigateTo={element.path}
              // />
              <WrapItem key={element.id} w="100%"
                cursor="pointer"
                onClick={() => {
                  setSelected(element.title);
                  navigate(element.path);
                  onClose();
                }} >
                <Wrap
                  spacing='20px'
                >
                  <HStack color='red'>
                    <WrapItem alignItems="center">
                      <Icon as={BsDot} fontSize="3xl"
                        opacity={(selected === element.title) ? "1" : "0"}
                      />
                      <Icon as={element.icon} />
                    </WrapItem>
                    <WrapItem >
                      {element.title}
                    </WrapItem>
                  </HStack>
                </Wrap>
              </WrapItem >
            ))}
          </Wrap>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </>
  );
}
