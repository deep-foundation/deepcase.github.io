import { useRef, useState } from 'react';
import {
  ArrowBackIcon, Button, Grid, Link, Screen, Typography, Collapse,
  useInterval,
  GravityCard,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  TextField,
  ButtonGroup,
  Card, CardContent, Divider,
  ConfettiExplosion,
  ButtonExplotion,
  Slider,
} from '../imports/framework';
import _ from 'lodash';
import { Provider } from '../imports/provider';
import { useEffect } from 'react';
import { useAnalitics } from '../imports/analitics';
import dynamic from "next/dynamic";

const Waitlist = dynamic(() => import("waitlistapi").then(w => w.Waitlist), { ssr: false });

const whyNoVariants = [
  {
    label: 'too incomprehensible',
    key: 'tooIncomprehensible',
  },
  {
    label: 'it can not be true',
    key: 'itCanNotBeTrue',
  },
];

export default function Page(props) {
  const [want, setWant] = useState(0); //
  const [whyNo, setWhyNo] = useState({});
  const [needNews, setNeedNews] = useState(0);
  const [email, setEmail] = useState('');
  const [planLength, setPlanLength] = useState(1);
  const [buy, setBuy] = useState(false); //
  const [wantPlan, setWantPlan] = useState(0);
  
  const counters = {
    wantYes: 50,
    wantNo: 3,
    needNews1: 12,
    needNews2: 24,
    needNews3: 11,
    wantPlan1: 40,
    wantPlan2: 12,
    wantBuy: 10,
    wantPay: 2,
  }

  const { event } = useAnalitics();

  return (
    <Provider>
      <Screen>
        <Grid container justify="center" alignItems="center" spacing={3}>
          <Grid item xs={12} style={{ height: '30vh' }} />
          <Grid item xs={12} style={{ position: 'sticky', top: 0, zIndex: 2, background: '#ffffffe6' }}>
            <Link href="/"><Button size="large"><ArrowBackIcon/>&nbsp;&nbsp;Deep.Foundation</Button></Link>
            <Typography variant="h2">Pre-order</Typography>
          </Grid>
          <Grid item xs={12} style={{ height: 50 }} />
          <Grid item xs={12}><>
            <Waitlist
              api_key="BBNAIR"
              waitlist_link="https://deep.foundation/pre-order"
              joinWaitlistHeading="Support us and make pre-order."
            />
          </>
          </Grid>
          <Grid item xs={12} style={{ height: '30vh' }} />
        </Grid>
      </Screen>
    </Provider>
  )
};
