import GitHubIcon from '@material-ui/icons/GitHub';
import { Screen, Container, Grid, Typography, Link } from '../imports/framework';
import { Card } from '../imports/card';
import { Provider } from '../imports/provider';

export default function Index(props) {
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
            <Card style={{ padding: 14, height: 150 }} disabled>
              <Typography variant="body1">Foundation</Typography>
              <Typography variant="body2">An open source corporation with all humanity as an investor.</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/deepcase"><Card style={{ padding: 14, height: 150 }}>
              <Typography variant="body1">Case</Typography>
              <Typography variant="body2">Ease way to use all our solutions.</Typography>
              <GitHubIcon />
            </Card></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/deepgraph"><Card style={{ padding: 14, height: 150 }}>
              <Typography variant="body1">Graph</Typography>
              <Typography variant="body2">Links models with multilang behaviors in npm tools.</Typography>
              <GitHubIcon />
            </Card></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Card style={{ padding: 14, height: 150 }} disabled>
              <Typography variant="body1">Claster</Typography>
              <Typography variant="body2">Autoscalable world size Deep.Case cluster infrastructure.</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/linksplatform"><Card style={{ padding: 14, height: 150 }}>
              <Typography variant="body1">Links</Typography>
              <Typography variant="body2">Abstract links low-level storage writed on C.</Typography>
              <GitHubIcon />
            </Card></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Card disabled style={{ padding: 14, height: 150 }}>
              <Typography variant="body1">View</Typography>
              <Typography variant="body2">Interface builder with Deep.Graph integration.</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Card disabled style={{ padding: 14, height: 150 }}>
              <Typography variant="body1">DDD</Typography>
              <Typography variant="body2">General principle. Philosophy.</Typography>
            </Card>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/store"><Card style={{ padding: 14, height: 150 }}>
              <Typography variant="body1">Store</Typography>
              <Typography variant="body2">React useState-like localStorage, cookies, url, capacitor hooks.</Typography>
              <GitHubIcon />
            </Card></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/materialized-path"><Card style={{ padding: 14, height: 150 }}>
              <Typography variant="body1">Materialized paths</Typography>
              <Typography variant="body2">Postgres triggers and hasura relationships.</Typography>
              <GitHubIcon />
            </Card></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={6}>
            <Link href="https://github.com/deepcase/hasura"><Card style={{ padding: 14, height: 150 }}>
              <Typography variant="body1">Hasura</Typography>
              <Typography variant="body2">HasuraApi for metadata and sql. HasuraApolloClient. AuthWebhook, RemoteSchema and EventHandler for NextJS.</Typography>
              <GitHubIcon />
            </Card></Link>
          </Grid>
        </Grid>
      </Screen>
    </Provider>
  )
};
