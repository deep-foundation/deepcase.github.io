import React from 'react';
import { useTranslation } from 'react-i18next';
import { Text, Flex, HStack } from '../framework';


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
  return (<Flex direction='column' maxW='1620px' textAlign='center'>
      <HStack spacing='4rem'>
        <GradientText text='studios--main-tasks-main' />
        <Text fontSize='5xl'>
        {t('studios--main-tasks-first')}
        </Text>
      </HStack>
      <HStack spacing='4rem'>
        <Text fontSize='5xl'>
        {t('studios--main-tasks-second')}
        </Text>
        <GradientText text='studios--main-tasks-tasks' />
      </HStack>
    </Flex>
  )
})
