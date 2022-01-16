import { makeStyles, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '../framework';
import React from 'react';
import { ICard } from '../../pages/new';
import { useTransition, a } from 'react-spring';


const useStyles = makeStyles(theme => ({
  containerPodcastSource: {
    boxShadow: '0 0 1px 1px #393d40, 0 0 1px 2px rgb(0 0 0 / 16%), 0 0 2px 3px rgb(0 0 0 / 14%), 0 0 4px 5px rgb(0 0 0 / 12%)',
    background: theme.palette.background.default,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: 0,
    zIndex: 11,
  },
  sourcePodcastBlock: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoSourcePodcast: {
    display: 'block',
    width: '100%',
  },
}));

export const PodcastSource = ({
  switcher,
  card: { links },
}:{
  switcher?: boolean;
  card: ICard;
}) => {
  const classes = useStyles();

  const transitions = useTransition(!switcher, {
    initial: { opacity: 0, transform: 'scale(0.8)', pointerEvents: 'none' },
    enter: { opacity: 0, transform: 'scale(0.8)', pointerEvents: 'none' },
    leave: { opacity: 1, transform: 'scale(1.2)', pointerEvents: 'all' },
    reverse: switcher,
    trail: 2000,
    expires: false,
    config: { mass: 1.7, tension: 65, friction: 25 },
  });

  // @ts-ignore
  return(<>{transitions((style, item) => (item && <a.div style={style} className={classes.containerPodcastSource}>
      <List>
        {links.map(s => (
          <ListItem key={s.provider.alt} className={classes.sourcePodcastBlock} button alignItems='center' component='a' href={s.href}>
            <ListItemAvatar>
              <div style={{overflow: 'hidden', width: '2rem', height: '2rem'}}>
                <img src={s.provider.icon} alt={s.provider.alt} className={classes.logoSourcePodcast} />
              </div>
            </ListItemAvatar>
            <ListItemText primary={s.provider.title} />
          </ListItem>
        ))}
      </List>
    </a.div>))}</>
  )
}