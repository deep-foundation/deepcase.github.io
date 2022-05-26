import React from "react";
import { HStack, VStack } from '../../framework';
import { DLetter, ELetter, PLetter } from "./deep";
import { GLetter, ILetter, LLetter, ULetter } from "./guild";


export const DeepGuild = React.memo<any>(() => {
  return (<VStack spacing='3rem'>
      <HStack width='65%' alignSelf='flex-start'>
        <DLetter />
        <ELetter />
        <ELetter />
        <PLetter />
      </HStack>
      <HStack width='65%' alignSelf='flex-end'>
        <GLetter />
        <ULetter />
        <ILetter />
        <LLetter />
        <DLetter />
      </HStack>
    </VStack>
  )
})