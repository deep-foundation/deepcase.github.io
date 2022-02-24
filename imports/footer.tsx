import React from 'react';
import { GiPeaceDove } from 'react-icons/gi';
import { VscGithubAlt } from 'react-icons/vsc';
import { RiPatreonLine } from 'react-icons/ri';
import { AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai';
import { Box, HStack, Text } from './framework';


export const Footer = React.memo(() => {
  return(
    <Box 
      w='100%' 
      h='8rem' 
      bg='transparentDark.500' 
      py='2rem'
      px={{sm: '1rem', md: '2rem'}}
      display='flex'
      flexDir='column'
      justifyContent='space-between'
      as='footer'>
      <Box w='100%' display='flex' justifyContent='flex-end'>
        <HStack spacing='0.3rem' sx={{border: '1px solid #EAEAEA', borderRadius: 'md', height: 'max-content', px: '3px', py: '2px'}}>
          <GiPeaceDove /> <Text fontSize='xs'>made by humans from earth</Text>
        </HStack>
      </Box>
      <Box w='100%' display='flex' justifyContent='flex-end'>
        <HStack spacing='0.5rem'>
          <AiOutlineYoutube />
          <AiOutlineFacebook />
          <VscGithubAlt />
          <RiPatreonLine />
        </HStack>
      </Box>
    </Box>
  )
})