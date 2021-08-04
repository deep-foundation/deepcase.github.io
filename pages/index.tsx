import GitHubIcon from '@material-ui/icons/GitHub';
import { Folder } from '../imports/folder';
import { Screen, Container, Grid, Typography, Link, GravityCard, AddIcon } from '../imports/framework';
import { Provider } from '../imports/provider';

export function NPMBadge({ name } : { name: string }) {
  return <a href={`https://badge.fury.io/js/${encodeURIComponent(name)}`}><img src={`https://badge.fury.io/js/${encodeURIComponent(name)}.svg`} alt="npm version" height="18"/></a>;
}

const deepgraphProject = <Link href="https://github.com/deepcase/deepgraph"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
<Typography variant="body1">Deep.Graph</Typography>
<Typography variant="body2">Graphql access to links models with multilang event handlers.</Typography>
<GitHubIcon /> <NPMBadge name="@deepcase/deepgraph"/>
</div></GravityCard></Link>;

const deepgraphPackage = <Link href="https://github.com/deepcase/deepgraph"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
<Typography variant="body2">@deepcase/deepgraph</Typography>
<Typography variant="body2">Graphql access to links models with multilang event handlers.</Typography>
<GitHubIcon /> <NPMBadge name="@deepcase/deepgraph"/>
</div></GravityCard></Link>;

const deepview = <GravityCard style={{ height: 150 }} disabled><div style={{ padding: 16, width: '100%' }}>
<Typography variant="body1">Deep.View</Typography>
<Typography variant="body2">Virtual DOM react/vue/angular in Deep.Graph.</Typography>
<Typography variant="body2">Coming soon...</Typography>
</div></GravityCard>;

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
          <Grid item md={3} sm={4} xs={12}>
            <Link href="/foundation"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
              <Typography variant="body1">Foundation</Typography>
              <Typography variant="body2">Open source corporation with all humanity as an investor.</Typography>
            </div></GravityCard></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Link href="/pre-order"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
              <Typography variant="body1">Pre-order</Typography>
              <Typography variant="body2">Help as to launch.</Typography>
            </div></GravityCard></Link>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Folder
              content={<Grid container spacing={3} style={{ maxWidth: 600, padding: 32 }}>
                <Grid item xs={12} sm={6}><Link href="https://github.com/deepcase/deepcase"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                  <Typography variant="body1">Deep.Case</Typography>
                  <Typography variant="body2">Links production infrastructure.</Typography>
                  <GitHubIcon />
                </div></GravityCard></Link></Grid>
                <Grid item xs={12} sm={6}>{deepgraphProject}</Grid>
                <Grid item md={6}>
                  <GravityCard style={{ height: 150 }} disabled><div style={{ padding: 16, width: '100%' }}>
                    <Typography variant="body1">Deep.Claster</Typography>
                    <Typography variant="body2">Autoscalable world size Deep.Case cluster infrastructure.</Typography>
                    <Typography variant="body2">Coming soon...</Typography>
                  </div></GravityCard>
                </Grid>
                <Grid item xs={12} sm={6}>{deepview}</Grid>
                <Grid item md={6}>
                  <GravityCard disabled style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                    <Typography variant="body1">DDD</Typography>
                    <Typography variant="body2">General principle. Philosophy.</Typography>
                    <Typography variant="body2">Coming soon...</Typography>
                  </div></GravityCard>
                </Grid>
              </Grid>}
            ><GravityCard style={{ height: 150 }} folder><div style={{ padding: 16, width: '100%' }}>
              <Typography variant="body1">Case</Typography>
              <Typography variant="body2">Solutions for use links theory in production.</Typography>
            </div></GravityCard></Folder>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Folder
              content={<Grid container spacing={3} style={{ maxWidth: 600, padding: 32 }}>
                <Grid item xs={12} md={6}><Link href="https://github.com/linksplatform"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                  <Typography variant="body1">LinksPlatform</Typography>
                  <Typography variant="body2">Low-level C lang realization.</Typography>

                  <GitHubIcon />
                </div></GravityCard></Link></Grid>
                <Grid item xs={12} md={6}>{deepgraphProject}</Grid>
                <Grid item xs={12} md={4}><GravityCard style={{ height: 150 }} disabled><div style={{ padding: 16, width: '100%' }}>
                  <Typography variant="body1">Links main theory</Typography>
                  <Typography variant="body2">Coming soon...</Typography>
                </div></GravityCard></Grid>
                <Grid item xs={12} md={4}><GravityCard style={{ height: 150 }} disabled><div style={{ padding: 16, width: '100%' }}>
                  <Typography variant="body1">Links models theory</Typography>
                  <Typography variant="body2">Coming soon...</Typography>
                </div></GravityCard></Grid>
                <Grid item xs={12} md={4}><GravityCard style={{ height: 150 }} disabled><div style={{ padding: 16, width: '100%' }}>
                  <Typography variant="body1">Links seq theory</Typography>
                  <Typography variant="body2">Coming soon...</Typography>
                </div></GravityCard></Grid>
              </Grid>}
            ><GravityCard style={{ height: 150 }} folder><div style={{ padding: 16, width: '100%' }}>
              <Typography variant="body1">Links</Typography>
              <Typography variant="body2">Theory, concept, realizations.</Typography>
            </div></GravityCard></Folder>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Folder
              content={<Grid container spacing={3} style={{ maxWidth: 600, padding: 32 }}>
                <Grid item xs={12} md={6}>
                  <Link href="https://github.com/deepcase/store"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                    <Typography variant="body2">@deepcase/store</Typography>
                    <Typography variant="body2">React useState-like localStorage, cookies, url, capacitor hooks.</Typography>
                    <GitHubIcon /> <NPMBadge name="@deepcase/store"/>
                  </div></GravityCard></Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Link href="https://github.com/deepcase/hasura"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                    <Typography variant="body2">@deepcase/hasura</Typography>
                    <Typography variant="body2">Hasura metadata and sql api, apollo client and integration for NextJS.</Typography>
                    <GitHubIcon /> <NPMBadge name="@deepcase/hasura"/>
                  </div></GravityCard></Link>
                </Grid>
                <Grid item xs={12} md={12}>
                  <Link href="https://github.com/deepcase/materialized-path"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                    <Typography variant="body2">@deepcase/materialized-path</Typography>
                    <Typography variant="body2">Postgres triggers and hasura relationships.</Typography>
                    <GitHubIcon /> <NPMBadge name="@deepcase/materialized-path"/>
                  </div></GravityCard></Link>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Link href="https://github.com/deepcase/react-hasura"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                    <Typography variant="body2">@deepcase/react-hasura</Typography>
                    <Typography variant="body2">ApolloClient regeneration context based on token.</Typography>
                    <GitHubIcon /> <NPMBadge name="@deepcase/react-hasura"/>
                  </div></GravityCard></Link>
                </Grid>
                <Grid item xs={12} md={6}>{deepgraphPackage}</Grid>
              </Grid>}
            ><GravityCard style={{ height: 150 }} folder><div style={{ padding: 16, width: '100%' }}>
              <Typography variant="body1">Packages</Typography>
              <Typography variant="body2">Our actual OpenSource packages</Typography>
            </div></GravityCard></Folder>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <Folder
              content={<Grid container spacing={3} style={{ maxWidth: 500, padding: 32 }}>
                <Grid item xs={7}>
                  <Link href="https://shakeapp.ru"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                    <Typography variant="body1"><img style={{ width: 150 }} src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjk3IiBoZWlnaHQ9IjY3IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgZmlsbD0iIzAwN0FGRiI+PHBhdGggZD0iTTE2LjMwOCAwaDQxLjA4OGMuMzM0IDAgLjYwNC4yNjUuNjA0LjU5MXYxMC41MjNjMCAuMzI2LS4yNy41OS0uNjA0LjU5SDE4LjgzYy00LjA1OCAwLTYuODY3IDMuMTg5LTYuODY3IDYuNjI0djE3LjE0N2MwIC42NjIuNTYxIDEuMTc3IDEuMjAxIDEuMTc3aDI1LjUwM2MuMzMzIDAgLjYwNC4yNjQuNjA0LjU5djEwLjUyM2MwIC4zMjctLjI3LjU5Mi0uNjA0LjU5MkguNjA0QS41OTguNTk4IDAgMDEwIDQ3Ljc2NXYtMzEuNzRDMCA3LjY0MyA2LjY0NiAwIDE2LjMwOCAweiIvPjxwYXRoIGQ9Ik00MS42OTIgNjdILjYwNEEuNTk4LjU5OCAwIDAxMCA2Ni40MDlWNTUuODg2YzAtLjMyNi4yNy0uNTkuNjA0LS41OUgzOS4xN2M0LjA1OCAwIDYuODY3LTMuMTg5IDYuODY3LTYuNjI0VjMxLjUyNWMwLS42NjItLjU2MS0xLjE3Ny0xLjIwMS0xLjE3N0gxOS4zMzNhLjU5OC41OTggMCAwMS0uNjA0LS41OVYxOS4yMzRjMC0uMzI3LjI3LS41OTIuNjA0LS41OTJoMzguMDYzYS41OTguNTk4IDAgMDEuNjA0LjU5MnYzMS43NEM1OCA1OS4zNTcgNTEuMzU0IDY3IDQxLjY5MiA2N3oiLz48L2c+PHBhdGggZD0iTTExOC44NzIgMjAuNDNjLS4zMTUuNDgzLS42NDUuODQ1LS45OSAxLjA4Ny0uMzQ3LjI0Mi0uNzkyLjM2My0xLjMzNy4zNjMtLjQ4MyAwLTEuMDAyLS4xNDYtMS41NTctLjQzOGEyODguNDUgMjg4LjQ1IDAgMDAtMS44ODctLjk4MyAxNi4wMDggMTYuMDA4IDAgMDAtMi40MDYtLjk4MmMtLjkwMi0uMjkyLTEuOTMtLjQzOC0zLjA4Mi0uNDM4LTEuOTkyIDAtMy40NzYuNDA4LTQuNDUgMS4yMjQtLjk3Ni44MTYtMS40NjMgMS45MTktMS40NjMgMy4zMSAwIC44ODYuMjkzIDEuNjIxLjg4IDIuMjA1LjU4Ny41ODUgMS4zNTggMS4wODggMi4zMTIgMS41MTEuOTU0LjQyNCAyLjA0NC44MTEgMy4yNyAxLjE2NGE4My44NCA4My44NCAwIDAxMy43NiAxLjE3OSAzNC4zNyAzNC4zNyAwIDAxMy43NTggMS41MjYgMTIuNTQgMTIuNTQgMCAwMTMuMjcgMi4yMzZjLjk1NS45MDcgMS43MjUgMi4wMSAyLjMxMiAzLjMxLjU4NyAxLjI5OS44OCAyLjg2Ni44OCA0LjY5OSAwIDIuMDM1LS4zNjYgMy45MzktMS4xIDUuNzEyYTEzLjM0NSAxMy4zNDUgMCAwMS0zLjE5MiA0LjYzOWMtMS4zOTUgMS4zMi0zLjExNCAyLjM1Ny01LjE1OCAzLjExMy0yLjA0NC43NTUtNC4zNjcgMS4xMzMtNi45NjcgMS4xMzMtMS40MjUgMC0yLjg3Ny0uMTQxLTQuMzU1LS40MjNhMjYuNjc5IDI2LjY3OSAwIDAxLTQuMjk0LTEuMTk0IDI1LjMzNCAyNS4zMzQgMCAwMS0zLjktMS44MjhjLTEuMjE2LS43MDUtMi4yNzQtMS40OTEtMy4xNzYtMi4zNThsMy4xNDUtNC43NzVhMy4xIDMuMSAwIDAxLjk5LS44NiAyLjY2NSAyLjY2NSAwIDAxMS4zMzctLjM0OGMuNjMgMCAxLjI2NC4xOTEgMS45MDMuNTc0LjY0LjM4MyAxLjM2My44MDYgMi4xNyAxLjI3LjgwOC40NjIgMS43MzUuODg2IDIuNzg0IDEuMjY4IDEuMDQ4LjM4MyAyLjI4NS41NzUgMy43MTEuNTc1IDEuOTI5IDAgMy40MjgtLjQwOCA0LjQ5Ny0xLjIyNCAxLjA3LS44MTYgMS42MDQtMi4xMSAxLjYwNC0zLjg4NCAwLTEuMDI3LS4yOTMtMS44NjQtLjg4LTIuNTA4LS41ODctLjY0NS0xLjM1OC0xLjE3OS0yLjMxMi0xLjYwMmEyMS44NzIgMjEuODcyIDAgMDAtMy4yNTUtMS4xMThjLTEuMjE2LS4zMjMtMi40NjQtLjY4LTMuNzQzLTEuMDczYTI4LjAzNiAyOC4wMzYgMCAwMS0zLjc0Mi0xLjQ1IDExLjgwNyAxMS44MDcgMCAwMS0zLjI1NS0yLjI2N2MtLjk1NC0uOTM3LTEuNzI1LTIuMTA2LTIuMzEyLTMuNTA2LS41ODctMS40LS44OC0zLjEyOC0uODgtNS4xODMgMC0xLjY1Mi4zNDUtMy4yNjQgMS4wMzctNC44MzUuNjkyLTEuNTcyIDEuNzA5LTIuOTcyIDMuMDUtNC4yMDEgMS4zNDMtMS4yMyAyLjk4OS0yLjIxMiA0LjkzOS0yLjk0NyAxLjk1LS43MzUgNC4xODMtMS4xMDMgNi42OTktMS4xMDMgMS40MDUgMCAyLjc3My4xMDYgNC4xMDQuMzE3YTIyLjI5IDIyLjI5IDAgMDEzLjc5LjkzN2MxLjE5NS40MTMgMi4zMTIuOTA3IDMuMzUgMS40ODFhMTUuNDMyIDE1LjQzMiAwIDAxMi43ODMgMS45NWwtMi42NDIgNC43NDR6bTQ5Ljg3OC05LjEwOVY1NS42OGgtMTAuODI1VjM2LjkyNWgtMTguODV2MTguNzU0SDEyOC4yNVYxMS4zMmgxMC44MjV2MTguNTRoMTguODVWMTEuMzJoMTAuODI1em0zMy40MjkgMjcuMzIybC00LjI0Mi0xMS45N2E0OC40OCA0OC40OCAwIDAxLTEuMDA1LTIuNjg1IDc5LjM4NyA3OS4zODcgMCAwMS0xLjA2OC0zLjM0NSA0Ny4xMDMgNDcuMTAzIDAgMDEtMi4wMSA2LjA5bC00LjIxMSAxMS45MWgxMi41MzZ6bTE2LjcxNCAxNy4wMzZoLTguMjg0Yy0uOTI4IDAtMS42NzYtLjIwOC0yLjI0NS0uNjI1YTMuOTkgMy45OSAwIDAxLTEuMjk3LTEuNTk4bC0yLjcyLTcuNzMzaC0xNy41MTZsLTIuNzIgNy43MzNjLS4yMzEuNTY4LS42NDggMS4wOC0xLjI0OSAxLjUzOC0uNi40NTYtMS4zNDMuNjg1LTIuMjI5LjY4NWgtOC4zNDdsMTcuODMzLTQ0LjM1OGgxMC45NGwxNy44MzQgNDQuMzU4em0xNC44NDMtMjYuMzk2aDEuNzA0YzEuNTc3IDAgMi43MTMtLjQ3NiAzLjQwNy0xLjQzbDEwLjM0OS0xNC40OTJjLjYxLS43NzEgMS4yNjctMS4zMDQgMS45NzItMS41OTguNzA0LS4yOTQgMS41ODMtLjQ0MiAyLjYzNC0uNDQyaDkuMjc2bC0xMy42MyAxNy45MzJjLS45NjcgMS4yMzgtMi4wMDggMi4xMzEtMy4xMjMgMi42OGE3LjcyMiA3LjcyMiAwIDAxMi4xNzcgMS4xODZjLjY1Mi41MDggMS4yNjIgMS4xNjcgMS44MyAxLjk4bDEzLjg4MiAyMC41OGgtOS41MjhjLS42MSAwLTEuMTMtLjA0MS0xLjU2Mi0uMTIyYTQuMTAyIDQuMTAyIDAgMDEtMS4xMi0uMzY2IDMuMjE3IDMuMjE3IDAgMDEtLjgyLS41OTMgNS45MjkgNS45MjkgMCAwMS0uNjYzLS44MDdsLTEwLjQxMi0xNS40MzVjLS4zNzktLjU2OC0uODU3LS45Ny0xLjQzNS0xLjIwMy0uNTc5LS4yMzMtMS4zNjItLjM1LTIuMzUxLS4zNWgtMi41ODdWNTUuNjhIMjIzLjA3VjExLjMyaDEwLjY2NXYxNy45NjJ6bTQ0LjIwNy0xMC4wNDZ2MTAuMzVoMTQuNTk1VjM3LjJoLTE0LjU5NXYxMC41NjRIMjk3djcuOTE2aC0yOS44OTNWMTEuMzJIMjk3djcuOTE2aC0xOS4wNTd6IiBmaWxsPSIjMjEyMTIxIi8+PC9nPjwvc3ZnPg=="/></Typography>
                    <Typography variant="body2">All around car sharing service. Open links graphql API. Multiplatform apps.</Typography>
                  </div></GravityCard></Link>
                </Grid>
                <Grid item xs={5}>
                  <Link href="https://github.com/deepcase/deepcase.github.io/issues/new"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
                    <Typography align="center"><AddIcon/></Typography>
                    <Typography variant="body2">Suggest your project</Typography>
                  </div></GravityCard></Link>
                </Grid>
              </Grid>}
            ><GravityCard style={{ height: 150 }} folder><div style={{ padding: 16, width: '100%' }}>
              <Typography variant="body1">Useges</Typography>
              <Typography variant="body2">Projects uses Deep solutions.</Typography>
            </div></GravityCard></Folder>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <GravityCard style={{ height: 150 }} disabled><div style={{ padding: 16, width: '100%' }}>
              <Typography variant="body1">Become an sponsor</Typography>
              <Typography variant="body2">Coming soon...</Typography>
            </div></GravityCard>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <GravityCard style={{ height: 150 }} disabled><div style={{ padding: 16, width: '100%' }}>
              <Typography variant="body1">Become an member</Typography>
              <Typography variant="body2">Coming soon...</Typography>
            </div></GravityCard>
          </Grid>
        </Grid>
      </Screen>
    </Provider>
  )
};
