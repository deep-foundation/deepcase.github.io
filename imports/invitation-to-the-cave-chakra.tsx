import { Variants, motion, useAnimation } from 'framer-motion';
import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Button, FormHelperText, Input, Text, VStack } from './framework';



const spring = {
  type: "spring",
  damping: 10,
  stiffness: 100,
  duration: 2
}

const invitation: Variants = {
  active: {
    opacity: 0,
    display: 'none',
    transition: spring 
  },
  inactive: {
    opacity: 1,
    display: 'block',
    transition: spring 
  }
}

const form: Variants = {
  active: {
    opacity: 1,
    display: 'block',
    transition: spring 
  },
  inactive: {
    opacity: 0,
    display: 'none',
    transition: spring 
  }
}

export const InvitationToTheCaveChakra = memo(() => {
  const { t } = useTranslation();
  const [ animation, setAnimation ] = useState(false);
  const control = useAnimation();

  const onEnterCave = useCallback(() => {
    setAnimation(!animation);
  },[animation])

  useEffect(() => {
    if (animation === true) {
      control.start("active"); 
    } else {
      control.start("inactive");
    }
  }, [control, animation]);

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        onEnterCave()
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (<Box pos='relative' w='100%' h='100%'>
      <motion.div variants={invitation} animate={control}>
       <Invitation onEnterCave={onEnterCave} />
      </motion.div>
      <motion.div variants={form} animate={control}>
        <EntryForm />
      </motion.div>
    </Box>
  )
})

const EntryForm = memo(() => {
  const { t } = useTranslation();
  const [value, setValue] = useState('')
  const handleChange = (event) => setValue(event.target.value)

  return (<VStack
      spacing={2}
      align='flex-start'
    >
      <Text
        htmlFor='name'
        as='label' 
        fontSize='sm' 
        color='primary'
      >
        {t('podcast-invitation--your_name')}
      </Text>
      <Input 
        id='name'
        type='text' 
        size='sm' 
        value={value}
        onChange={handleChange}
      />
      <Text
        htmlFor='phone'
        as='label' 
        fontSize='sm' 
        color='primary'
      >
        {t('podcast-invitation--your_phone')}
      </Text>
      <Input 
        id='phone'
        type='tel' 
        size='sm' 
        value={value}
        onChange={handleChange}
      />
      <Text
        htmlFor='email'
        as='label' 
        fontSize='sm' 
        color='primary'
      >
        {t('podcast-invitation--your_email')}
      </Text>
      <Input 
        id='email'
        type='email' 
        size='sm' 
        value={value}
        onChange={handleChange}
      />
      <Text
        htmlFor='greatest_achievement'
        as='label' 
        fontSize='sm' 
        color='primary'
      >
        {t('podcast-invitation--greatest_achievement')}
      </Text>
      <Input 
        id='greatest_achievement'
        type='text' 
        size='sm' 
        value={value}
        onChange={handleChange}
      />
      <Text
        htmlFor='legendary_event'
        as='label' 
        fontSize='sm' 
        color='primary'
      >
        {t('podcast-invitation--legendary_event')}
      </Text>
      <Input 
        id='legendary_event'
        type='text' 
        size='sm' 
        value={value}
        onChange={handleChange}
      />
      <Text color='whiteAlpha.800' fontSize='xs'>{t('podcast-invitation--podcast_name')}</Text>
      <Button 
        colorScheme='red'
        borderRadius='none'
        width='100%'
        _active={{
          transform: 'scale(0.85)',
        }}
        _last={{mt: 6}}
        onClick={() => {}}
      >
        {t('podcast-invitation--button_call_the_dragon')}
      </Button>
    </VStack>
  )
})

const Invitation = memo(({onEnterCave}:{onEnterCave: () => any;}) => {
  const { t } = useTranslation(); 

  return ( <VStack
      spacing={2}
      textAlign='center'
    >
      <Text 
        color='rgb(252, 255, 254)'
        sx={{
          '&:first-letter': {
            color: 'primary'
          }
        }}
      >{t('podcast-invitation')}</Text>
      <Text color='primary'>{t('podcast-invitation--dragon_cave')}</Text>
      <Text color='rgb(252, 255, 254)'>{t('podcast-invitation--description')}</Text>
      <Text color='rgb(244, 4, 3)'>{t('podcast-invitation--all_record')}</Text>
      <Text color='primary'>{t('podcast-invitation--podcast_published')}</Text>
      <Text color='rgb(252, 255, 254)'>{t('podcast-invitation--podcast_available_for_crew')}</Text>
      <Button 
        bg='rgb(102, 118, 135)'
        borderRadius='none'
        _hover={{ bg: '#54626b' }}
        _active={{
          bg: '#54626b',
          transform: 'scale(0.85)',
        }}
        _focus={{
          border: '1px solid rgb(255, 255, 251)',
        }}
        _last={{mt: 6}}
        onClick={onEnterCave}
      >
        {t('podcast-invitation--button_enter_the_cave')}
      </Button>
    </VStack>
  )
})