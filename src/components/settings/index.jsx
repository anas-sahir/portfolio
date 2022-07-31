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
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
    Icon,
    IconButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { CgOptions } from "react-icons/cg";
import { FaCircle } from "react-icons/fa";
import { BiCheck } from "react-icons/bi";
import useColor from "../../utils/useColor";

export default function Settings() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { toggle, pick } = useColor();
    const [showTooltip, setShowTooltip] = useState(false);
    const [sliderValue, setSliderValue] = useState(15);
    const labelStyles = { mt: '2', ml: '-2.5', fontSize: 'sm' };

    return (<>
        <Circle _hover={{ transform: "scale(1.3) ", bgColor: pick("#edf2f7", "gray.700"), color: pick("blue.500", "#2bfafa") }}
            transition="1s" bg={pick("blue.200", "cyan.900")} onClick={onOpen} cursor="pointer"
            size={"fit-content"}
        >
            <Box padding={2}>
                <CgOptions />
            </Box>
        </Circle>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Settings</ModalHeader>
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

                        <FormLabel display={(window.localStorage.getItem("ballons") === "true") ? "block" : "none"}>
                            Ballons number
                        </FormLabel>
                        <FormLabel display={(window.localStorage.getItem("ballons") === "true") ? "block" : "none"}>
                            <Slider defaultValue={60} min={0} max={30} step={1}
                                onChange={(v) => setSliderValue(v)}
                                onMouseEnter={() => setShowTooltip(true)}
                                onMouseLeave={() => setShowTooltip(false)}>

                                <SliderMark value={0} {...labelStyles}>
                                    0
                                </SliderMark>
                                <SliderMark value={10} {...labelStyles}>
                                    10
                                </SliderMark>
                                <SliderMark value={20} {...labelStyles}>
                                    20
                                </SliderMark>
                                <SliderMark value={30} {...labelStyles}>
                                    30
                                </SliderMark>
                                {/* <SliderMark
                                    value={sliderValue}
                                    textAlign='center'
                                    bg='blue.500'
                                    color='white'
                                    mt='-10'
                                    ml='-5'
                                    w='12'
                                >
                                    {sliderValue}
                                </SliderMark> */}
                                <SliderTrack bg='blue.100'>
                                    {/* <Box position='relative' right={10} /> */}
                                    <SliderFilledTrack bg='#6C63FF' />
                                </SliderTrack>
                                {/* <Tooltip hasArrow color='#6C63FF' placement='top' isOpen={showTooltip} >
                                    {sliderValue}
                                </Tooltip> */}
                                <SliderThumb boxSize={3}>
                                    <Icon as={FaCircle} />
                                </SliderThumb>
                            </Slider>
                        </FormLabel>
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
                        <FormLabel></FormLabel>
                        <FormLabel mt="15px" textAlign={"end"} > 
                        <IconButton fontSize={"25px"} icon={<BiCheck />} borderRadius="50%" /> 
                        </FormLabel>
                    </FormControl>
                </ModalBody>

            </ModalContent>
        </Modal>
    </>);
}