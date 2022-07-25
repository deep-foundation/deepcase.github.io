import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Flex, HStack, Center } from '../framework';
import Typist from 'react-typist';


const GradientText = React.memo(({text}:{text:  string;}) => {
  const { t } = useTranslation();
  return (
    <Text
      bgGradient='linear(180deg, rgba(11,0,46,1) 0%, rgba(81,0,134,1) 45%, rgba(213,101,0,1) 100%)'
      bgClip='text'
      fontSize='12em'
      fontWeight='black'
    >{t(text)}</Text>
  )
}) 

export const MainTasks = React.memo(() => {
  const { t } = useTranslation();
  return (<Center width='100%'>
      <Flex direction='column' maxW='1620px' textAlign='center'>
        <HStack spacing='4rem'>
          <GradientText text='studios--main-tasks-main' />
          <Typist cursor={{hideWhenDone: true}}>
            <Text fontSize='5xl'>
            {t('studios--main-tasks-first')}
            </Text>
          </Typist>
        </HStack>
        <HStack spacing='4rem'>
          <Typist cursor={{hideWhenDone: true}}>
            <Text fontSize='5xl'>
            {t('studios--main-tasks-second')}
            </Text>
          </Typist>
          <GradientText text='studios--main-tasks-tasks' />
        </HStack>
      </Flex>
    </Center>
  )
})
