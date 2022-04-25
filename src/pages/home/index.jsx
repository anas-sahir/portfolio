import { Box, Flex, Input, Text } from "@chakra-ui/react";
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { useState } from "react";
import useColor from "../../utils/useColor";

export default function Home() {
    const { pick, mode } = useColor();
    const [clr, setClr] = useState((mode === "light") ? "#465363" : "#CFD9E8");
    return (
        <Flex
            ml={{ xxl: "15%", xl: "15%", lg: "15%", md: "15%", sm: "0%", base: "0%" }}
            mt={{ xxl: "0%", xl: "0%", lg: "0%", md: "0%", sm: "43px", base: "43px" }}
            w={{ xxl: "85%", xl: "85%", lg: "85%", md: "85%", sm: "100%", base: "100%" }}
            letterSpacing={"widest"}
            align="center"
            justify="center"
            h={{ xxl: window.innerHeight, xl: window.innerHeight, lg: window.innerHeight, md: window.innerHeight, sm: window.innerHeight - 43, base: window.innerHeight - 43 }}
            zIndex={10}
            flexDirection="column"
        >
            <Text
                fontSize={{ xxl: 120, xl: 90, lg: 80, md: 70, sm: 50, base: 40 }}
                fontFamily={"cursive"}
                fontWeight="bold"
                align={"center"}
                transform="initial"
                transition="ease-in-out"
                color={clr}
            >
                Hello world 😃
            </Text>
            {/* <Box my={5}>
                <Button type="primary">PRESS ME</Button>
            </Box>
            <Box my={5}>
                <DatePicker />
            </Box> */}
            <Flex position="absolute"
                top={{ xxl: 0, xl: 0, lg: 0, md: 0, sm: "43px", base: "43px" }}
                right={0}
                w={{ xxl: "85%", xl: "85%", lg: "85%", md: "85%", sm: "100%", base: "100%" }}
                align="center"
                flexDirection={"row-reverse"}
                color={clr}
            >
                <Input type={"color"}
                    placeholder="#465363"
                    defaultValue={clr}
                    w={"90px"}
                    borderRadius={60}
                    onChange={(e) => { setClr(e.target.value) }}
                    borderColor={null}
                />
                <Text mr={5}>Change me</Text>
            </Flex>
        </Flex>
    );
}