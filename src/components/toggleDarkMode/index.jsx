import useColor from "../../utils/useColor"
import { Icon } from '@chakra-ui/react'
import { BsFillMoonFill } from "react-icons/bs"
import { RiSunFill } from "react-icons/ri"

export default function ToggleDarkMode() {
    const { toggle, pick } = useColor();
    return (
        <Icon cursor="pointer"
            onClick={toggle}
            as={pick(BsFillMoonFill, RiSunFill)}
        // color={pick("gray.700", "orange.300")}
        />
    );
}