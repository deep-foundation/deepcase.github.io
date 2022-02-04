import { makeStyles, Modal, Backdrop, Typography, IconButton, Button, Fade } from './framework';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Space } from './space';


const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#000', //theme.palette.background.paper,
    boxShadow: '0px 0px 2px 4px rgba(143,143,143,0.13), 0px 0px 4px 6px rgba(143,143,143,0.20)',
    width: 678,
    height: 'max-content',
    margin: '7rem auto',
    borderRadius: 5,
    '@media(max-width: 825px)': {
      width: '90vw',
    },
  },
  contentContainer: {
    padding: '4rem 2rem',
    '@media(max-width: 825px)': {
      padding: '2rem',
    },
  },
  titleModal: {
    color: '#fff',
    '&:first-letter': {
      textTransform: 'capitalize',
    },
  },
  textModal: {
    fontSize: 'calc(14px + 0.5vmax)',
    fontWeight: 300,
    color: '#fff',
    fontFamily: "'Comfortaa', 'sans-serif'",
    textAlign: 'center',
  },
  discordButton: {
    width: '100%',
    background: '#7289da',
    borderRadius: 5,
    padding: '1rem 1.6rem',
  },
  buttonsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat( auto-fit, minmax(24px, 56px) )',
    columnGap: 'calc(1rem + 1.5vmax)',
    rowGap: '1rem',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '2rem 0',
    '@media(max-width: 620px)': {
      gridTemplateColumns: 'repeat( auto-fit, 24px)',
    }
  },
  imageContainer: {
    borderRadius: '50%',
    padding: 0,
  },
}))

export const TalksForm = React.memo(({
  portalOpen = false, 
  onClosePortal
}:{
  portalOpen?: boolean; 
  onClosePortal: () => any;
}) => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (<Modal
      aria-modal={true}
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      className={classes.modal}
      open={portalOpen}
      onClose={onClosePortal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={portalOpen}>
        <div className={classes.contentContainer}>
          <Typography variant='h1' className={classes.titleModal} align='center'>{t('talks-form-write-to-us')}</Typography>
          <Space unit={2} />
          <Button href='https://discord.gg/RD8wFKtujH' className={classes.discordButton} aria-label='discord'>
            <img src='/discord.svg' alt='Discord' width='40%' />
          </Button>
          <div className={classes.buttonsContainer}>
            <IconButton href='https://www.youtube.com/channel/UCWn8rWuwZ4ISFVNTgy0GEow/featured' className={classes.imageContainer} aria-label='you tube'>
              <img src='/source/youtube.png' alt='YouTube' width='100%' />
            </IconButton>
            <IconButton href='https://www.facebook.com/DeepFoundation-101491865581762' className={classes.imageContainer} aria-label='facebook'>
              <img src='/fb.png' alt='Facebook' width='100%' />
            </IconButton>
            <IconButton href='https://vk.com/deep.foundation' className={classes.imageContainer} aria-label='vkontakte'>
              <img src='/vk.png' alt='VKontakte' width='100%' />
            </IconButton>
            <IconButton href='https://github.com/deep-foundation' className={classes.imageContainer} aria-label='git hub'>
              <img src='/github.png' alt='GitHub' width='100%' />
            </IconButton>
            <IconButton href='https://www.patreon.com/deepfoundation?fan_landing=true' className={classes.imageContainer} aria-label='patreon'>
              <img src='/pt.png' alt='Patreon' width='100%' />
            </IconButton>
          </div>
          <Space unit={2} />
          <div dangerouslySetInnerHTML={{ __html: t('talks-form-how-to-get-on-our-podcast') }} className={classes.textModal} />
          {/* <Typography variant='body2' className={classes.titleModal} align='center'>{t('talks-form-how-to-get-on-our-podcast')}</Typography> */}
        </div>
      </Fade>
    </Modal>
  )
})