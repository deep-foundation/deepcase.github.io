import GitHubIcon from '@material-ui/icons/GitHub';
import { Screen, Container, Grid, Typography, Link, GravityCard } from '../imports/framework';
import { Provider } from '../imports/provider';

export default function Page(props) {
  return (
    <Provider>
      <Screen>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{ height: '30vh' }} />
          <Grid item xs={12}>
            <Typography variant="h2">Deep.Foundation</Typography>

            <Typography>World will never be the same again because it won't have to repeat itself</Typography>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="/foundation"><GravityCard style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">Foundation</Typography>
              <Typography variant="body2">An open source corporation with all humanity as an investor.</Typography>
              <Typography variant="body2">Team main cast.</Typography>
            </div></GravityCard></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/deepcase"><GravityCard style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">Case</Typography>
              <Typography variant="body2">Ease way to use all our solutions.</Typography>
              <GitHubIcon />
            </div></GravityCard></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/deepgraph"><GravityCard style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">Graph</Typography>
              <Typography variant="body2">Links models with multilang behaviors in npm tools.</Typography>
              <GitHubIcon />
            </div></GravityCard></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <GravityCard style={{ height: 200 }} disabled><div style={{ padding: 16 }}>
              <Typography variant="body1">Claster</Typography>
              <Typography variant="body2">Autoscalable world size Deep.Case cluster infrastructure.</Typography>
            </div></GravityCard>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/linksplatform"><GravityCard style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">Links</Typography>
              <Typography variant="body2">Abstract links low-level storage writed on C.</Typography>
              <GitHubIcon />
            </div></GravityCard></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <GravityCard disabled style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">View</Typography>
              <Typography variant="body2">Interface builder with Deep.Graph integration.</Typography>
            </div></GravityCard>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <GravityCard disabled style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">DDD</Typography>
              <Typography variant="body2">General principle. Philosophy.</Typography>
            </div></GravityCard>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/store"><GravityCard style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">Store</Typography>
              <Typography variant="body2">React useState-like localStorage, cookies, url, capacitor hooks.</Typography>
              <GitHubIcon />
            </div></GravityCard></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/materialized-path"><GravityCard style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">Materialized paths</Typography>
              <Typography variant="body2">Postgres triggers and hasura relationships.</Typography>
              <GitHubIcon />
            </div></GravityCard></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/hasura"><GravityCard style={{ height: 200 }}><div style={{ padding: 16 }}>
              <Typography variant="body1">Hasura</Typography>
              <Typography variant="body2">Hasura metadata and sql api, apollo client and integration for NextJS.</Typography>
              <GitHubIcon />
            </div></GravityCard></Link>
          </Grid>
        </Grid>
      </Screen>
    </Provider>
  )
};
