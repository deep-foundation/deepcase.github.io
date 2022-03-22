import React from "react";
import { DLetter, ELetter, PLetter } from "./deep";
import { SLetter, TLetter, ULetter, ILetter, OLetter } from "./studios";
import { HStack, VStack } from '../../framework';


export const DeepStudios = React.memo<any>(() => {
  return (<VStack spacing='3rem'>
      <HStack width='65%' alignSelf='flex-start'>
        <DLetter />
        <ELetter />
        <ELetter />
        <PLetter />
      </HStack>
      <HStack width='65%' alignSelf='flex-end'>
        <SLetter />
        <TLetter />
        <ULetter />
        <DLetter />
        <ILetter />
        <OLetter />
        <SLetter />
      </HStack>
    </VStack>
  )
})