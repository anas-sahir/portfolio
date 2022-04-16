import useColor from "../../utils/useColor"
import { Icon } from '@chakra-ui/react'
import { BsFillMoonFill } from "react-icons/bs"
import { RiSunFill } from "react-icons/ri"

export default function ToggleDarkMode() {
    const { toggle, mode } = useColor();
    return (
        <Icon onClick={toggle}
            as={(mode === "light") ? BsFillMoonFill : RiSunFill}
            color={(mode === "light") ? "gray.700" : "orange.300"}
        />
    );
}