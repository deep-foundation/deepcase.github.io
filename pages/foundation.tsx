import { useRef, useState } from 'react';
import {
  ArrowBackIcon, Button, Grid, Link, Screen, Typography, Image,
  useInterval,
  GravityCard,
} from '../imports/framework';
import { Provider } from '../imports/provider';

const team = [
  { name: 'Ivan Glazunov', description: 'Founder, Lead, Architect', src: '/avatars/ivansglazunov.jpg' },
  { name: 'Konstantin Dyachenko', description: 'Lead, LinksTheory', src: '/avatars/konard.jpg' },
  { name: 'Peter Bezdenezhnykh', description: 'Lead, DevOps', src: '/avatars/menzorg.jpg' },
];

export function Team(props) {
  const [rotate, setRotate] = useState(() => Math.floor( (Math.random() * (380-0 +1) ) + 0 ));
  const [hover, setHover] = useState(false);
  const speed = !!hover ? 0.02 : 0.1;
  const speedRef = useRef(0.1);
  useInterval(() => {
    if (speedRef.current > speed) speedRef.current = speedRef.current - 0.002;
    if (speedRef.current < speed) speedRef.current = speedRef.current + 0.002;
    setRotate(r => r + speedRef.current);
  }, 10);

  return <div
    style={{ position: 'relative' }}
  >
    <img src="/point.png" style={{ width: '100%' }}/>
    {team.map((t, i) => (
      <div style={{
        position: 'absolute',
        left: '50%', top: '50%',
        width: '50%', height: '50%',
        transformOrigin: '0 0',
        transform: `rotate(${((360 / team.length) * (i + 1)) + rotate}deg)`,
      }}>
        <div
          onMouseEnter={() => setHover(i)}
          onMouseLeave={() => setHover(false)}
          style={{
            position: 'absolute',
            top: '25%',
            width: '50%',
            height: '50%',
            transform: `rotate(${((360 / team.length) * ((team.length - i) - 1)) - rotate}deg)`,
          }}
        >
          <GravityCard style={{ height: '100%', width: '100%', position: 'relative' }} PaperProps={{ style: { borderRadius: '100%', overflow: 'hidden', position: 'relative' } }}>
            <div style={{ transform: hover === i ? 'scale(1.1)' : 'scale(1)', transition: 'all 1s ease', height: '100%', width: '100%', position: 'aboslute' }}>
              <Image src={t.src} layout="fill" objectFit="cover"/>
            </div>
          </GravityCard>
          <Typography style={{ position: 'absolute', top: '110%', left: '-50%', width: '200%' }} align="center" variant="body1">
            {t.name}
            <Typography variant="body2">
              {t.description}
            </Typography>
          </Typography>
        </div>
      </div>
    ))}
  </div>;
}

export default function Page(props) {
  return (
    <Provider>
      <Screen>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ height: '30vh' }} />
          <Grid item xs={12}>
            <Link href="/"><Button size="large"><ArrowBackIcon/>&nbsp;&nbsp;Deep.Foundation</Button></Link>
            <Typography variant="h2">Foundation</Typography>
          </Grid>
          <Grid item xs={12}>
            <Team/>
          </Grid>
          <Grid item xs={12} style={{ marginTop: 30 }}>
            <Typography variant="h4">Transparency</Typography>
            <Typography>...</Typography>
            <Typography variant="h4">Consulting</Typography>
            <Typography>...</Typography>
            <Typography variant="h4">Binary trast</Typography>
            <Typography>...</Typography>
            <Typography variant="h4">Integrity</Typography>
            <Typography>...</Typography>
            <Typography variant="h4">Atomic liability</Typography>
            <Typography>...</Typography>
          </Grid>
        </Grid>
      </Screen>
    </Provider>
  )
};
