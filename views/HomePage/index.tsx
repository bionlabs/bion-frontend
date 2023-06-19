'use client'

import React from 'react'
import {
    Container, VStack
} from '@chakra-ui/react'
import Hero from './sections/Hero'
import UpcomingSale from './sections/UpcomingSale'

const HomePage = () => {
  return (
    <Container maxW='container.xxl' py={10}>
        <VStack align='start' justify='start' w='100%' spacing={12}>
            <Hero/>
            <UpcomingSale/>
        </VStack>
    </Container>
  )
}

export default HomePage