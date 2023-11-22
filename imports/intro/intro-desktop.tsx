import { useTranslation } from 'react-i18next';
import { Box, Button, Code, HStack, ListItem, Text, UnorderedList, VStack, useColorMode, Kbd } from '../framework';
import { ParticlesButton } from '../particles/particles-button';
import { memo, useCallback, useState } from 'react';
import { LazyMotion, Variants, domAnimation, motion, m, useMotionValue, AnimatePresence } from 'framer-motion';


export const IntroDesktop = memo(() => {
  const { t } = useTranslation();
  return (<Box
      width='100%'
      display='grid'
      gridTemplateRows='repeat(6, 0.1fr)'
      gridTemplateColumns='repeat(4, 1fr)'
      rowGap={3}
      columnGap={10}
    >
      <Box gridColumn='1/3'>
        <Text textStyle='Regular20' color='white' textAlign={'right'}>{t('intro--developer--title')}</Text>
      </Box>
      <Box gridColumn='3/5'>
        <Text textStyle='Regular20' color='white'>{t('intro--business--title')}</Text>
      </Box>
      <Box gridColumn='1/3'>
        <UnorderedList styleType='none' textAlign={'right'} ml={0} mr={0} >
          <ListItem>
            <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white'>{t('intro--developer--questions')}</Text>
          </ListItem>
          <ListItem>
            <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white'>{t('intro--developer--research_channel')}</Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box gridColumn='3/5'>
        <UnorderedList styleType='none' ml={0}>
          <ListItem>
            <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white'>{t('intro--business--start_business')}</Text>
          </ListItem>
          <ListItem>
            <Text fontSize={{sm: 'sm', md: 'xl'}} colorScheme='white'>{t('intro--business--need_team')}</Text>
          </ListItem>
        </UnorderedList>
      </Box>
      <Box gridColumn='2/4' alignSelf='center' justifySelf='center'>
        <Text textStyle='Regular16' colorScheme='white' align={{sm: 'left', md: 'right'}}> 
          {t('intro--write')}
        </Text>
      </Box>
      <Box gridColumn='1/3' justifySelf='flex-end'>
        <Text textStyle='Regular16' as='kbd' colorScheme='white' align={{sm: 'left', md: 'right'}}> 
          #iamdev
        </Text>
      </Box>
      <Box gridColumn='3/5'>
        <Text textStyle='Regular16' as='kbd' colorScheme='white'>#iambusiness
        </Text>
      </Box>
      <Box gridColumn='2/4' alignSelf='center' justifySelf='center'>
        <Text textStyle='Regular16' colorScheme='white' align={{sm: 'left', md: 'right'}}> 
          {t('intro--in')}
        </Text>
      </Box>
      <Box
        gridColumn='2/4' alignSelf='center' justifySelf='center'
        position='relative'
        bg='transparent'
        w='max-content'
        height='auto'
      >
        <Box
          position='absolute'
          top='50%'
          left={0}
          pb={[null, '0.3em']}
          transform='translateY(-50%)'
          bg='transparent'
          w='100%'
          height='auto'
        >
          <Text align='center' textStyle='Medium16'>
            <Text as='kbd' textStyle='Medium16'>#hi</Text> {t('intro--channel')}
          </Text>
        </Box>
        <ParticlesButton>
          <Text align='center' textStyle='Medium16'>
            <Text as='kbd' textStyle='Medium16'>#hi</Text> {t('intro--channel')}
          </Text>
        </ParticlesButton>
      </Box>
    </Box>
  )
})

const variant: Variants = {
  hide: {
    opacity: 0,
    y: '-100%',
  },
  show: custom => ({
    opacity: 1,
    y: '0%',
    transition: {
      delay: custom * 0.1,
      opacity: { delay: custom * 0.11 },
      duration: 0.5,
    }
  })
}
const code = `<code>
                const question = 'ask questions';<br />
                const researchChannel = 'get your Deep research channel';<br />
                const start = 'start business with Deep';<br />
                const team = 'find a team';<br />
                <br />
                if(Developer) {<br />
                &ensp;question && researchChannel<br />
                } else { start || team }
              </code>`;

export const Welcome = memo(() => {
  const { t } = useTranslation();
  const {colorMode} = useColorMode();
  const [ choice, setChoice ] = useState<string>('');

  return (<VStack align='flex-start' pr='5rem' justifyContent='center'>
      <Box 
        bg='transparent'
        sx={{
          minW: '18.75rem',
          width: '100%',
          padding: '0.08rem',
          borderRadius: '0.6rem',
          background: colorMode === 'dark' ? 'linear-gradient(180deg, rgba(247,105,255,1) 0%, rgba(100,100,206,1) 35%, rgba(59,190,255,1) 100%)' : 'linear-gradient(120deg, rgba(238,173,19,1) 0%, rgba(255,225,168,1) 35%, rgba(238,166,58,1) 100%)',
        }}
      >
        <Box 
          bg='flagBackground' 
          display='flex' 
          flexFlow='column 
          nowrap' 
          p='0.5rem' 
          borderRadius='0.55rem'
          position='relative'
          overflow='hidden'
        >
          <LazyMotion features={domAnimation}>
          {/* <div dangerouslySetInnerHTML={{ __html: code }} /> */}
            <Code 
              variant='codeExample'
              custom={1}
              as={m.div} 
              variants={variant}
              whileInView='show'
              // viewport={{ once: true, amount: 0.5 }}
              initial='hide'
              sx={{bg: 'transparent'}}>
              {`const question = ${t('intro--developer--questions')
              };`}
            </Code>
            <Code 
              variant='codeExample'
              custom={2}
              as={m.div} 
              variants={variant}
              whileInView='show'
              // viewport={{ once: true, amount: 0.5 }}
              initial='hide'
              sx={{bg: 'transparent'}}>
              {`const researchChannel  = ${t('intro--developer--research_channel')
              };`}
            </Code>
            <Code 
              variant='codeExample'
              custom={3}
              as={m.div} 
              variants={variant}
              whileInView='show'
              // viewport={{ once: true, amount: 0.5 }}
              initial='hide'
              sx={{bg: 'transparent'}}>
              {`const start = ${t('intro--business--start_business')
              };`}
            </Code>
            <Code 
              variant='codeExample'
              custom={4}
              as={m.div} 
              variants={variant}
              whileInView='show'
              // viewport={{ once: true, amount: 0.5 }}
              initial='hide'
              sx={{bg: 'transparent', mb: '1rem'}}>
              {`const team = ${t('intro--business--find_team')
              };`}
            </Code>
            <Code 
              variant='codeExample'
              custom={5}
              as={m.div} 
              variants={variant}
              whileInView='show'
              // viewport={{ once: true, amount: 0.5 }}
              initial='hide'
              sx={{bg: 'transparent'}}>
              {`if(${t('intro--developer--title')}) {`}
            </Code>
            <Code 
              variant='codeExample'
              custom={6}
              as={m.div} 
              variants={variant}
              whileInView='show'
              // viewport={{ once: true, amount: 0.5 }}
              initial='hide'
              sx={{bg: 'transparent', paddingLeft: '1rem'}}>
              {'question && researchChannel'}
            </Code>
            <Code 
              variant='codeExample'
              custom={7}
              as={m.div} 
              variants={variant}
              whileInView='show'
              // viewport={{ once: true, amount: 0.5 }}
              initial='hide'
              sx={{bg: 'transparent'}}>
              {`} else { start || team }`}
            </Code>
          </LazyMotion>
        </Box>
      </Box>
      <HStack align='baseline'>
        <Text textStyle='Medium20' colorScheme='white' align={{sm: 'left', md: 'right'}}>{t('intro--choose')}</Text>
        {/* <LazyMotion features={domAnimation}> */}
        <VStack>
          <AnimatePresence>
            { choice === 'dev'
            ? <Button 
              as='a' 
              variant='ghost' 
              href='https://chakra-ui.com/docs/components/button/props' 
              sx={{target: '_blank', color: 'text'}} 
            >
                <Kbd>#iamdev</Kbd>
              </Button>
            : choice === 'business'
            ? <Button 
                as='a' 
                variant='ghost' 
                href='https://react.dev'
                sx={{target: '_blank', color: 'text'}}
              >
                <Kbd>#iambusiness</Kbd>
              </Button>
            : <Text textStyle='Regular20' color='textTransparent' align={{sm: 'left', md: 'right'}}>{t('intro--choose_transparent')}</Text>
            }
          </AnimatePresence>
          {/* <Box 
            as={motion.div} 
            width='7rem' 
            height='0.3rem' 
            bg='text' 
            borderRadius='0.03rem' 
            // animate={{
            //   opacity: 1
            // }}
            animate={{
              scale: [1, 2, 2, 1, 1],
              opacity: [0, 0.5, 1, 0.5, 0],
              // borderRadius: ["0%", "0%", "50%", "50%", "0%"]
            }}
            //@ts-ignore
            transition={{
              duration: 1,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 0.5
            }}
          /> */}
        </VStack>
        {/* </LazyMotion> */}
        {/* <Line /> */}
      </HStack>
      <Box
        sx={{
          background: colorMode === 'dark' ? 'linear-gradient(90deg, rgba(9,38,121,1) 0%, rgba(35,20,127,1) 45%, rgba(134,19,19,1) 55%, rgba(255,0,0,1) 100%)' : 'linear-gradient(90deg, rgb(3 0 255) 0%, rgb(34 0 244) 45%, rgb(216 45 45) 55%, rgba(255,0,0,1) 100%)',
          width: 'max-content',
          height: 'max-content',
          borderRadius: '50px',
          overflow: 'hidden',
          cursor: 'pointer',
          display: 'flex',
          flexFlow: 'row nowrap',
          textTransform: 'uppercase',
        }}
      >
        <LazyMotion features={domAnimation}>
          <Box role='button' as={m.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            //@ts-ignore
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => setChoice('dev')}
            sx={{
              background: 'transparent',
              width: 'max-content',
              height: 'max-content',
              // cursor: 'pointer',
            }}
          >
            <Text textStyle='Medium16' align='center' color='white' p='1rem 3rem'>development</Text>
          </Box>
          <Box role='button' as={m.div}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            //@ts-ignore
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            onClick={() => setChoice('business')}
            sx={{
              background: 'transparent',
              width: 'max-content',
              height: 'max-content',
              // cursor: 'pointer',
            }}
          >
            <Text textStyle='Medium16'  align='center' color='white' p='1rem 3rem'>business</Text>
          </Box>
        </LazyMotion>
      </Box>
    </VStack>
  )
});
