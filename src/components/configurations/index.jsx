import {
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    FormControl,
    FormLabel,
    Switch,
    SimpleGrid,
    Circle,
    Box,
} from "@chakra-ui/react";
import { CgOptions } from "react-icons/cg";
import useColor from "../../utils/useColor";

export default function Configurations() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { toggle, pick } = useColor();
    return (<>
        <Circle _hover={{ transform: "scale(1.5) ", bgColor: pick("#edf2f7", "gray.700") }}
            transition="1s" bg={pick("blue.200", "cyan.900")} onClick={onOpen} cursor="pointer"
            size={"fit-content"}
        >
            <Box _hover={{ color: pick("blue.500", "#2bfafa") }}
                transition="1s" padding={2}
            >
                <CgOptions />
            </Box>
        </Circle>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Configurations</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl columns={2}
                        as={SimpleGrid}
                    >
                        <FormLabel rowGap={2} >Thème:</FormLabel> <FormLabel></FormLabel>
                        <FormLabel htmlFor='theme'>{pick("Clair", "Sombre")}</FormLabel>
                        <Switch id='theme' onChange={toggle}
                            defaultChecked={pick(false, true)}
                        />
                        <FormLabel htmlFor='ballons'>Ballons</FormLabel>
                        <Switch id='ballons' onChange={() => {
                            window.localStorage.setItem(
                                "ballons",
                                (window.localStorage.getItem("ballons") === "false") ? true : false
                            );
                            window.location.reload();
                        }}
                            defaultChecked={(window.localStorage.getItem("ballons") === "true") ? true : false}
                        />

                        {/* <FormLabel htmlFor='isChecked'>isChecked:</FormLabel>
                        <Switch id='isChecked' isChecked />

                        <FormLabel htmlFor='isDisabled'>isDisabled:</FormLabel>
                        <Switch id='isDisabled' isDisabled defaultChecked />

                        <FormLabel htmlFor='isFocusable'>isFocusable:</FormLabel>
                        <Switch id='isFocusable' isFocusable isDisabled />

                        <FormLabel htmlFor='isInvalid'>isInvalid:</FormLabel>
                        <Switch id='isInvalid' isInvalid />

                        <FormLabel htmlFor='isReadOnly'>isReadOnly:</FormLabel>
                        <Switch id='isReadOnly' isReadOnly />

                        <FormLabel htmlFor='isRequired'>isRequired:</FormLabel>
                        <Switch id='isRequired' isRequired /> */}
                    </FormControl>
                </ModalBody>

            </ModalContent>
        </Modal>
    </>);
}