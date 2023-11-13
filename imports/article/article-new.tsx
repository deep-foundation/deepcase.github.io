import { Box, Button, HStack, IconButton, Img, Link, Text, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { IconProvider } from '../icon-provider';
import { TbEyePlus } from 'react-icons/tb';
import { PiChatsThin, PiEyeThin } from 'react-icons/pi';
import { BoxShadow } from '../box-shadow';
import { PiLinkSimpleHorizontalThin } from 'react-icons/pi';


export const Article = React.memo<any>(({
  title = 'Фактор рефакторинга',
  views = 4800,
  comments = 36,
  src,
  alt,
  href,
  onClick = () => {},
  onClickRead = () => {},
  ...props
}:{
  title?: string;
  views?: number;
  comments?: number;
  src?: string;
  alt?: string;
  href?: string;
  onClick?: (id:any) => any;
  onClickRead?: (id:any) => any;
  [key:string]: any;
}) => {  
  const { t } = useTranslation();
  const {colorMode} = useColorMode();

  return (<BoxShadow blockWidth='max-content' blockHeight='max-content'>
      <Box
        onClick={(id: any) => onClick(id)}
        as='article'
        sx={{
          maxWidth: '11rem',
          padding: '0.05rem',
          position: 'relative',
          borderRadius: '0.3rem',
          background: colorMode === 'dark' ? 'linear-gradient(180deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : 'linear-gradient(120deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)',
        }}
        {...props}
      >
        <Box
          sx={{
            background: 'flagBackground',
            color: 'text',
            padding: '1.3rem 1.2rem',
            borderRadius: '0.3rem',
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
          }}
        >
          <Text textStyle='Medium20' align='center' mb='1rem'>
            {title}
          </Text>
          <Box display='flex' flexFlow='row' mb='2rem'>
            <HStack spacing='0.3rem' mr='1rem'>
              <IconProvider icon={<PiEyeThin />} color={colorMode === 'light' ? '#060608' : '#fff'} />
              <Text textStyle='Medium16'>{views}</Text>
            </HStack>
            <HStack spacing='0.3rem'>
              <IconProvider icon={<PiChatsThin />} color={colorMode === 'light' ? '#060608' : '#fff'} />
              <Text textStyle='Medium16'>{comments}</Text>
            </HStack>
          </Box>
          <HStack>
            <Button variant='link' onClick={(id: any) => onClickRead(id)}><Text textStyle='Medium16'>{t('article-read')}</Text></Button> 
            <IconButton variant='link' aria-label={t('article-open-link-in-new-tab')} icon={<IconProvider 
              icon={<PiLinkSimpleHorizontalThin />} 
              size='1rem'
              color={colorMode === 'light' ? '#060608' : '#fff'} />} />
          </HStack>
          <Box borderRadius='0.3rem' overflow='hidden' border='thin solid #dcf6ff' sx={{flex: '1 1 auto'}}>
            <Img src={src} alt={alt} />
          </Box>
        </Box>
      </Box>
    </BoxShadow>
  );
});