import React from "react";
import { HStack, VStack, Box } from '../../framework';
import { DLetter, ELetter, PLetter } from "./deep";
import { GLetter, ILetter, LLetter, ULetter } from "./guild-motion";


export const DeepGuild = React.memo<any>(() => {
  return (<VStack spacing={{sm: '1.5rem', md: '3rem'}}>
      <HStack width='65%' alignSelf='flex-start'>
        <DLetter />
        <ELetter />
        <ELetter />
        <PLetter />
      </HStack>
      <Box 
        w='65%' 
        h='max-content'
        justifyContent='center'
        alignItems='center'
        alignSelf='flex-end'
        display='grid'
        gridTemplateColumns='repeat(2, 1fr) 0.5fr repeat(2, 1fr)'
      >
        <GLetter />
        <ULetter />
        <ILetter />
        <LLetter />
        <DLetter />
      </Box>
    </VStack>
  )
})