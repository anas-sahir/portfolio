import {
    useDisclosure,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    ModalHeader,
    List,
    ListIcon,
    ListItem,
    FormControl,
    FormLabel,
    Switch,
    SimpleGrid,
    FormErrorIcon,
} from "@chakra-ui/react";
import { Divider } from "antd";
import { FormCheck } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import { CgOptions } from "react-icons/cg";
import useColor from "../../utils/useColor";

export default function Configurations() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { toggle, pick } = useColor();
    return (<>
        <CgOptions cursor="pointer" onClick={onOpen} />

        <Modal isOpen={isOpen} onClose={onClose}>
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