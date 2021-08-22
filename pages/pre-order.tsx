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
          <Grid item xs={12}>
            <Typography variant="h4">Resourses</Typography>
            <Typography><a href="#">medium</a></Typography>
            <Typography><a href="#">habr</a></Typography>
          </Grid>
          <Grid item xs={12} style={{ height: 50 }} />
          <Grid item xs={12}>
            <Typography variant="h4">Want to use Deep solutions?</Typography>
            <Grid container justify="center" alignItems="center" spacing={1}>
              <Grid item><ButtonExplotion variant="outlined" onClick={() => {
                setWant(want === 1 ? 0 : 1);
                event('want-yes');
              }} disabled={want === 1}>yes ({counters.wantYes})</ButtonExplotion></Grid>
              <Grid item><Button variant="outlined" onClick={() => {
                setWant(want === 2 ? 0 : 2);
                event('want-no');
              }} disabled={want === 2}>no ({counters.wantNo})</Button></Grid>
            </Grid>
            {want === 1 && <>
              <Grid container justify="center" alignItems="center" spacing={1}>
                <Grid item xs={12} style={{ height: 50 }} />
                <Grid item xs={12}>
                  <Typography variant="h4">Want to subscribe?</Typography>
                </Grid>
                <Grid item>
                  <ButtonGroup variant="outlined">
                    <Button color={needNews === 1 ? 'primary' : 'default'} onClick={() => {
                      setNeedNews(1);
                      event('need-news-1');
                    }}>all ({counters.needNews1})</Button>
                    <Button color={needNews === 2 ? 'primary' : 'default'} onClick={() => {
                      setNeedNews(2);
                      event('need-news-2');
                    }}>only release ({counters.needNews2})</Button>
                    <Button color={needNews === 3 ? 'primary' : 'default'} onClick={() => {
                      setNeedNews(3);
                      event('need-news-3');
                    }}>no ({counters.needNews3})</Button>
                  </ButtonGroup>
                </Grid>
                <Grid item xs={12}>
                  <Collapse in={needNews !== 3}>
                    <TextField
                      fullWidth
                      variant="outlined"
                      multiline
                      placeholder='email@test.com'
                      disabled={needNews === 3}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </Collapse>
                </Grid>
              </Grid>
              {needNews !== 0 && <>
                <Grid container justify="center" alignItems="center" spacing={1}>
                  <Grid item xs={12} style={{ height: 50 }} />
                  <Grid item xs={12}>
                    <Typography variant="h4">What is your favorite plan?</Typography>
                    <Typography>Deep.Case is boxed solution with community and enterprise edition, but without devops and deep realtime optimization.</Typography>
                    <Typography>Deep.Space is cloud solution multiple plans. International union associative database with devops and deep realtime optimization.</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Card variant="outlined">
                      <CardContent style={{ paddingBottom: 16 }}>
                        <Typography variant="h5">Hobby plan</Typography>
                        <Typography>free</Typography>
                        <Grid container justify="center" alignItems="center" spacing={1}>
                          <Grid item xs={12}><Divider/></Grid>
                          <Grid item xs={12}>
                            <Typography>base platform</Typography>
                            <Typography>easy to develop</Typography>
                            <Typography>useful for fast prototyping</Typography>
                            <Typography>multilanguage and multistack</Typography>
                            <Typography>open source comunity edition</Typography>
                          </Grid>
                          <Grid item xs={12}><Divider/></Grid>
                          <Grid item><ButtonExplotion variant="outlined" onClick={() => {
                            setWantPlan(1);
                            setBuy(false);
                            event('want-plan-1');
                          }} color={wantPlan === 1 ? 'primary' : 'default'}>want ({counters.wantPlan1})</ButtonExplotion></Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Grid container justify="center" alignItems="center" spacing={1}>
                      <Grid item xs={12}>
                        <Card variant="outlined">
                          <CardContent style={{ paddingBottom: 16 }}>
                            <Typography variant="h5">Startup plan</Typography>
                            <Typography>19$ <s>39$</s></Typography>
                            <Grid container justify="center" alignItems="center" spacing={1}>
                              <Grid item xs={12}><Divider/></Grid>
                              <Grid item xs={12}>
                                <Typography>international kuber cluster</Typography>
                                <Typography>autobalance</Typography>
                                <Typography>regional law store&calculating</Typography>
                                <Typography>pgsql smart optimization</Typography>
                                <Typography>runners/handlers autobalance</Typography>
                              </Grid>
                              <Grid item xs={12}><Divider/></Grid>
                              <Grid item><ButtonExplotion variant="outlined" color={buy ? 'primary' : 'default'} onClick={() => {
                                setWantPlan(2);
                                setBuy(true);
                                event('buy-plan-2');
                              }}>buy ({counters.wantBuy})</ButtonExplotion></Grid>
                              <Grid item><ButtonExplotion variant="outlined" onClick={() => {
                                setWantPlan(2);
                                event('want-plan-2');
                              }} color={wantPlan === 2 ? 'primary' : 'default'}>want ({counters.wantPlan2})</ButtonExplotion></Grid>
                            </Grid>
                          </CardContent>
                        </Card>
                      </Grid>
                    </Grid>
                  </Grid>
                  {buy && <>
                    <Grid item xs={12} style={{ height: 50 }} />
                    <Grid item xs={12} sm={6}>
                      <Card variant="outlined">
                        <CardContent style={{ paddingBottom: 16 }}>
                          <Typography variant="h5">payment</Typography>
                          <Typography>{planLength * 19}$ <s>{planLength * 39}$</s></Typography>
                          <Typography>{planLength} {planLength > 1 ? 'months' : 'month'}</Typography>
                          <Slider
                            defaultValue={1}
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={24}
                            onChange={(e, v) => setPlanLength(+v)}
                            value={planLength}
                          />
                          <Typography>manually activated after release</Typography>
                          <Typography variant="body2">return possible</Typography>
                          <ButtonExplotion fullWidth variant="outlined" onClick={() => {
                            event('pay');
                          }}>
                            pay ({counters.wantPay})
                          </ButtonExplotion>
                        </CardContent>
                      </Card>
                    </Grid>
                  </>}
                </Grid>
              </>}
            </>}
            {want === 2 && <>
              <Grid item xs={12} style={{ height: 50 }} />
              <Typography variant="h4">Why?</Typography>
              <FormControl component="fieldset">
                <FormGroup>
                  {whyNoVariants.map(variant => (
                    <FormControlLabel
                      control={<Checkbox checked={!!whyNo[variant.key]} onChange={() => setWhyNo({ ...whyNo, [variant.key]: !whyNo[variant.key] })} name={variant.key} />}
                      label={variant.label}
                    />
                  ))}
                </FormGroup>
              </FormControl>
              <TextField
                fullWidth
                variant="outlined"
                multiline
                placeholder='custom reason'
              />
            </>}
          </Grid>
          <Grid item xs={12} style={{ height: '30vh' }} />
        </Grid>
      </Screen>
    </Provider>
  )
};
