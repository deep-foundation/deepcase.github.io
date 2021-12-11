import { Box, IconButton, Tooltip, Typography, Zoom } from '@mui/material';
import { makeStyles, useTheme } from '@mui/styles';
import React from 'react';
import { LogoImage } from './logo';
import { Play } from '../icons/play';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

interface IImage {
  id: string;
  src: string;
  alt?: string;
  top?: number;
  left?: number;
  width?: number;
}

const useStyles = makeStyles({
  image: {
    width: '100%',
    display: 'block',
  },
  animateBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'linear-gradient(#202a38 .025em, transparent .025em), linear-gradient(90deg, #202a38 .025em, transparent .025em)',
    backgroundSize: '1em 1em',
  },
  logoContainer: {
    position: 'relative', 
    width: '100%',
  },
});

export const Podcast = ({
  guestImgSrc,
  guestName,
  occupation,
  date,
  length,
  privateCast = true,
  imgs,
}:{
  guestImgSrc: string;
  guestName: string;
  occupation?: string;
  date?: string;
  length?: string;
  privateCast?: boolean;
  imgs?: IImage[];
}) => {
  const classes = useStyles();
  const theme = useTheme();
  return(<Box sx={{display:'flex', flexDirection:'column', position: 'relative', boxShadow: '0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)', borderRadius: 1, overflow: 'hidden'}}>
      <Box sx={{background: (theme) => theme?.palette?.background?.default, position: 'relative'}}>
        <div className={classes.animateBackground} />
        {imgs.map(i => (<LogoImage key={i.id} src={i.src} alt={i.alt} top={i.top} left={i.left} width={i.width} />))}
        <Box sx={{position: 'relative', zIndex: 2}}>
          <img src={guestImgSrc} alt={guestName} className={classes.image} />
        </Box>
        <Box sx={{position: 'absolute', top: '4%', left: '4%'}}>
          <Typography variant='body1' component='div' style={{textTransform: 'uppercase'}}>{guestName}</Typography>
          <Typography variant='body1' component='div' style={{textTransform: 'capitalize'}}>{occupation}</Typography>
          <Typography variant='caption' component='div'>{date}</Typography>
        </Box>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', background: '#080d11c2', paddingRight: '4%', paddingLeft: '4%'}} py={1}>
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Typography variant='caption' component='div' style={{marginRight: '12%'}}>{length}</Typography>
          <IconButton><Play /></IconButton>
        </Box>
        {privateCast && 
          <Tooltip TransitionComponent={Zoom} title="Private" placement="right-start">
            <Typography variant='caption' component='div' style={{textTransform: 'uppercase'}}>private</Typography>
          </Tooltip>
        }
      </Box>
    </Box>
  )
}