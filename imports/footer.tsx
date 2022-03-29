import React from 'react';
import { GiPeaceDove, GiCandlestickPhone, GiMailbox, GiDirectionSigns } from 'react-icons/gi';
import { VscGithubAlt } from 'react-icons/vsc';
import { RiPatreonLine, RiDiscordLine } from 'react-icons/ri';
import { SiDiscord } from 'react-icons/si';
import { AiOutlineYoutube, AiOutlineFacebook } from 'react-icons/ai';

import { VK } from './icons/vk';
import { Box, HStack, Text, IconButton, Flex, Link, Center, VisuallyHidden } from './framework';
import { useTranslation } from 'react-i18next';


export const Footer = React.memo(() => {
  const { t } = useTranslation();

  return(
    <Box 
      w='100%' 
      h='max-content' 
      bg='transparentDark.500' 
      py='2rem'
      px={{sm: '1rem', md: '2rem'}}
      display='flex'
      flexDir='column'
      justifyContent='space-between'
      as='footer'>
      <Box w='100%' display='flex' justifyContent='center'>
        <HStack spacing='0.3rem'>
          <GiPeaceDove /> <Text fontSize='xs'>made by humans from Earth</Text>
        </HStack>
      </Box>
      <Box w='100%' display='flex' justifyContent='center' mb='1em'>
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
          {/* <IconButton
            variant='ghost'
            colorScheme='teal'
            aria-label='github repository deep foundation'
            href="https://www.facebook.com/DeepFoundation-101491865581762" 
            title='facebook'
            as='a'
            target='_blank'
            fontSize='xl'
            icon={<AiOutlineFacebook />}
          /> */}
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
            icon={<RiPatreonLine />}
          />
          <IconButton
            variant='ghost'
            colorScheme='teal'
            aria-label='discord channel deep foundation'
            href="https://discord.gg/RD8wFKtujH" 
            title='discord'
            as='a'
            target='_blank'
            fontSize='xl'
            icon={<SiDiscord />}
          />
        </HStack>
      </Box>
      <Flex direction={{'sm': 'column', 'md': 'row'}} alignItems='center' justify='space-between'>
        <Text 
          fontSize='xs' 
          sx={{
            display: {'sm': 'block','md': 'none'}
          }}
        >{t("deep-meeting")}</Text>  
        <Link href='tel: +7 985 427 12 56'>
          <HStack>
            <GiCandlestickPhone /> <Text fontSize='xs'>+7 985 427 12 56</Text>
          </HStack>  
        </Link>
        <Text 
          fontSize='xs' 
          sx={{
            display: {'sm': 'none','md': 'block'}
          }}
        >{t("deep-meeting")}</Text>
        <Link href='mailto: info@deep.foundation'>
          <HStack>
            <GiMailbox /> <Text fontSize='xs'>info@deep.foundation</Text>
          </HStack>
        </Link>
      </Flex>
      <Center>
        <Link isExternal href=''>
          <HStack>
            <GiDirectionSigns /> <Text fontSize='xs'>{t("deep-address")}</Text>
          </HStack>
        </Link>
      </Center>
    </Box>
  )
})