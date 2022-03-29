import React from 'react';
import { useTranslation } from 'react-i18next';
import { SiDiscord } from 'react-icons/si';
import { Button, Text, Center, useMediaQuery } from './framework';
import { IconContext } from "react-icons";
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles(theme => ({
  icon: {
  }
}))

const StyledIcon = React.memo(() => {
  return (<IconContext.Provider value={{ size: '4.5rem' }}>
      <div>
        <SiDiscord />
      </div>
    </IconContext.Provider>
  )
})

export const JoinDiscord = React.memo(() => {
  const { t } = useTranslation();
  const [sm] = useMediaQuery('(min-width: 620px)');

  return (<Center w='100%'>
     
      <Button 
        variant='link' 
        as='a' 
        color='#fff'
        target='_blank'
        href='https://discord.gg/RD8wFKtujH' 
        rightIcon={!sm ? null : <StyledIcon />}
      >
        <Text fontSize='calc(2rem + 1.5vmax)'>{t('join-us-on-discord')}</Text>
      </Button>
    </Center>
  )
})