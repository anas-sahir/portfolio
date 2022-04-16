import React from 'react'
import { Flex } from '@chakra-ui/react';

export default function Footer() {
    return (
        <Flex
            position={"absolute"}
            h="100%"
            w="100%"
            zIndex={10}
            flexDirection="column-reverse"
        >
            <Flex >
                {/* here comes the footer */}
            </Flex>
        </Flex>
    );
}