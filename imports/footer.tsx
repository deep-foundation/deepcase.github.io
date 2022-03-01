import React from 'react';
import { GiPeaceDove } from 'react-icons/gi';
import { VscGithubAlt } from 'react-icons/vsc';
import { CgPatreon } from 'react-icons/cg';
import { AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai';
import { VK } from './icons/vk';
import { Box, HStack, Text, IconButton } from './framework';


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
      <Box w='100%' display='flex' justifyContent='center'>
        <HStack spacing='0.3rem' sx={{}}>
          <GiPeaceDove /> <Text fontSize='xs'>made by humans from Earth</Text>
        </HStack>
      </Box>
      <Box w='100%' display='flex' justifyContent='center'>
        <HStack spacing='0.5rem'>
          <IconButton
            variant='ghost'
            colorScheme='teal'
            aria-label='github repository deep foundation'
            href="https://www.youtube.com/channel/UCWn8rWuwZ4ISFVNTgy0GEow/featured" 
            title='youtube'
            as='a'
            target='_blank'
            fontSize='xl'
            icon={<AiOutlineYoutube />}
          />
          <IconButton
            variant='ghost'
            colorScheme='teal'
            aria-label='github repository deep foundation'
            href="https://www.facebook.com/DeepFoundation-101491865581762" 
            title='facebook'
            as='a'
            target='_blank'
            fontSize='xl'
            icon={<AiOutlineFacebook />}
          />
          <IconButton
            variant='ghost'
            colorScheme='teal'
            aria-label='github repository deep foundation'
            href="https://vk.com/deep.foundation" 
            title='vkontakte'
            as='a'
            target='_blank'
            fontSize='xl'
            icon={<VK />}
          />
          <IconButton
            variant='ghost'
            colorScheme='teal'
            aria-label='github repository deep foundation'
            href="https://github.com/deep-foundation" 
            title='github repository deep foundation'
            as='a'
            target='_blank'
            fontSize='xl'
            icon={<VscGithubAlt />}
          />
          <IconButton
            variant='ghost'
            colorScheme='teal'
            aria-label='github repository deep foundation'
            href="https://www.patreon.com/deepfoundation?fan_landing=true" 
            title='patreon'
            as='a'
            target='_blank'
            fontSize='xl'
            icon={<CgPatreon />}
          />
        </HStack>
      </Box>
    </Box>
  )
})