import GitHubIcon from '@material-ui/icons/GitHub';
import dynamic from "next/dynamic";
import { Folder } from '../imports/folder';
import { AddIcon, Button, ButtonGroup, GravityCard, Grid, Link, makeStyles, Screen, Typography } from '../imports/framework';
import { Provider } from '../imports/provider';


const Waitlist: any= dynamic(() => import("waitlistapi").then(w => w.Waitlist), { ssr: false });

export function NPMBadge({ name } : { name: string }) {
  return <a href={`https://badge.fury.io/js/${encodeURIComponent(name)}`}><img src={`https://badge.fury.io/js/${encodeURIComponent(name)}.svg`} alt="npm version" height="18"/></a>;
}

const deepgraphProject = <Link href="https://github.com/deepcase/deepgraph"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
<Typography variant="body1">Deep.Links</Typography>
<Typography variant="body2">Graphql access to links models with gui, admin panel, permissions...</Typography>
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

const useStyles = makeStyles((theme) => ({
  waitlistgrid: {
    '& *': {
      fontFamily: `${theme.typography.fontFamily} !important`,
    },
    '& > * > *': {
      maxWidth: '100% !important',
      padding: '0 !important',
    },
  }
}));

export default function Page() {
  return (
    <Provider>
      <PageContent/>
    </Provider>
  );
}

export function PageContent() {
  const classes = useStyles();

  return (<>
    <Button variant="contained" size="large" color="primary" fullWidth component="a" href="https://gitpod.io/#https://github.com/deepcase/deepcase" style={{
      position: 'sticky', top: 0, left: 0, width: '100%', zIndex: 2
    }}>
        🧪 Open pre alpha Deep.Case CE Demo in GitPod <img src="/gitpod.png" style={{ width: 16, height: 16, marginLeft: 8 }}/>
    </Button>
    <Screen>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ height: '30vh' }} />
        <Grid item xs={12}>
          <Typography variant="h2">Deep.Foundation</Typography>

          <Typography>World will never be the same again because it won't have to repeat itself</Typography>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
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
            <Typography variant="h5">🚠</Typography>
            <Typography variant="body1">Case</Typography>
            <Typography variant="body2">Solutions for use links theory in production.</Typography>
          </div></GravityCard></Folder>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
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
            <Typography variant="h5">🛸</Typography>
            <Typography variant="body1">Links</Typography>
            <Typography variant="body2">Theory, concept, realizations.</Typography>
          </div></GravityCard></Folder>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
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
            <Typography variant="h5">📦</Typography>
            <Typography variant="body1">Packages</Typography>
            <Typography variant="body2">Our actual OpenSource packages</Typography>
          </div></GravityCard></Folder>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
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
            <Typography variant="h5">✨</Typography>
            <Typography variant="body1">Usages</Typography>
            <Typography variant="body2">Projects uses Deep solutions.</Typography>
          </div></GravityCard></Folder>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Link href="https://ivansglazunov.notion.site/5fd4cbcbf9834033abad279699e29af6?v=5524a91f88974c259b3443e923c6517b"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
            <Typography variant="h5">🏃</Typography>
            <Typography variant="body1">Features plan <img src="/notion.png" style={{ width: 16, height: 16 }}/></Typography>
            <Typography variant="body2">Project management features plan.</Typography>
          </div></GravityCard></Link>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Link href="https://ivansglazunov.notion.site/a3da8192888840f4990c3588fca36be0?v=b6cc35ae4db74fbda89f94be332e8ae0"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
            <Typography variant="h5">📯</Typography>
            <Typography variant="body1">Articles plan <img src="/notion.png" style={{ width: 16, height: 16 }}/></Typography>
            <Typography variant="body2">Drafts, articles and publication plan.</Typography>
          </div></GravityCard></Link>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Link href="https://www.patreon.com/deepfoundation?fan_landing=true"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
            <Typography variant="h5"><img src="/patreon.png" style={{ width: 24, height: 24 }}/></Typography>
            <Typography variant="body1">Ways to support us on Patreon</Typography>
          </div></GravityCard></Link>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Link href="https://gitpod.io/#https://github.com/deepcase/deepcase"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
            <Typography variant="h5">🧪</Typography>
            <Typography variant="body1">Demo  <img src="/gitpod.png" style={{ width: 16, height: 16 }}/></Typography>
            <Typography variant="body2">Pre alpha Deep.Case CE.</Typography>
          </div></GravityCard></Link>
        </Grid>
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <Link href="https://ivansglazunov.notion.site/social-links-1a50eb546ddd41d2a218b8a9f3150b66"><GravityCard style={{ height: 150 }}><div style={{ padding: 16, width: '100%' }}>
            <Typography variant="h5">🔗</Typography>
            <Typography variant="body1">Social links</Typography>
            <Typography variant="body2">Github, Facebook, YouTube...</Typography>
          </div></GravityCard></Link>
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h3">Кто мы, и что мы делаем</Typography>
          <Typography>Мы создали решение Deep.Case для применения
            ассоциативного подхода в работе с данными. Благодаря использованию такого подхода потребность в рефакторинге
            практически исчезает, так как концепции бизнес-логики, схем хранения данных, правовых правил и привязывание кода к
            селекторам ассоциативных связей, описываются естественным и гибким способом - ассоциативными связями.</Typography>
          <Typography>Отдельно будут публиковаться статьи, раскрывающие каждый из вопросов детально. Сейчас их
            черновики можно посмотреть в <a className="notion-link"
              href="/a3da8192888840f4990c3588fca36be0?v=b6cc35ae4db74fbda89f94be332e8ae0">Articles plan</a>.</Typography>
          <Typography variant="h3">Смысл</Typography>
          <Typography>На протяжении 5 лет мы искали причину существования феноменов "прогрессивно растущей стоимости
            разработки проектов" и "избыточного среднего количества рефакторинга в IT" и обнаружили решение в альтернативном,
            более естественном и экологичном, подходе хранения и агрегации данных с помощью ассоциативных технологий. </Typography>
          <Typography>В результате длительных экспериментов по поиску проектов, продолжающих идеи <a
              className="notion-link" href="https://en.wikipedia.org/wiki/Associative_model_of_data">Simon Williams</a> или <a
              className="notion-link" href="https://en.wikipedia.org/wiki/Relational_database#RDBMS">Edgar Codd</a> как, к примеру,
            наш современник <a className="notion-link" href="https://github.com/linksplatform">Links Platform</a>, мы выявили
            проблемы, с которыми столкнулись предшественники в попытках принести ассоциативность обществу. </Typography>
          <Typography>Мы сделали проект и прототип, позволяющий привнести ассоциативность в бизнес уже сегодня, и хотим
            поделиться этим с миром.</Typography>
          <Typography variant="h3">Статус</Typography>
          <Typography>Сейчас <a className="notion-link" href="http://deep.Case">Deep.Case</a> находится в стадии pre-alpha.
            В нем уже реализованы:</Typography>
          <ul className="notion-list notion-list-disc">
            <li><Typography><b>Уникальные правовые решения</b>, позволяющие применять "правила" к некоторым диапозонам определенного типа
              связей в определенных поддеревьях. Правила создаются всего несколькими связями и не требуют, как в случае с
              файловыми системами, маркировки всех файлов и папок. Крайне "дешевая" вычислительно проверка прав позволяет
              описывать ими реализацию сложной бизнес-логики поверх ассоциативной сети.</Typography></li>
          </ul>
          <ul className="notion-list notion-list-disc">
            <li><Typography><b>Индексация</b>, позволяющая делать запросы на получение данных для приложений не путем траверса/join(ов) по
              деревьям ссылок, а диапазонами деревьев, сразу выгружая нужное.</Typography></li>
          </ul>
          <ul className="notion-list notion-list-disc">
            <li><Typography><b>GraphQL интерфейс доступа</b> к ассоциативному хранилищу. SQL-like синтаксис запросов, позволяющий применять
              join и обеспечивающий быстрый доступ к данным.</Typography></li>
          </ul>
          <ul className="notion-list notion-list-disc">
            <li><Typography><b>PostgreSQL </b>оптимизированное ассоциативное хранилище с гибридным подходом для хранения своих табличных
              данных, вплетая их в ассоциативную сеть.</Typography></li>
          </ul>
          <Typography variant="h3">Цель</Typography>
          <Typography>Мы проверили и перепроверили свои гипотезы, и готовы к упаковке. Помогите нам собрать аудиторию
            вокруг <a className="notion-link" href="http://deep.Foundation">Deep.Foundation</a> и ассоциативных технологий, и мы
            создадим:</Typography>
          <ul className="notion-list notion-list-disc">
            <li><Typography>Подробную <b>документацию </b>и <b>примеры</b>, а также разовьем культуру ассоциативных моделей в пакетных
              менеджерах для создания своих проектов на ассоциативной экосистеме Deep.</Typography>Подробну</li>
          </ul>
          <ul className="notion-list notion-list-disc">
            <li><Typography><a className="notion-link" href="http://deep.Case">Deep.Case</a> ⇒ Community Edition</Typography></li>
            <ul className="notion-list notion-list-disc">
              <li><Typography>С <b>установкой ассоциативных моделей </b>(схема типов связей, программный код бизнес логики, интерфейс
                визуальных карточек для админ-панели)</Typography></li>
              <li><Typography>я для <b>быстрого </b>и <b>экономного развертывания </b>ассоциативной инфраструктуры из коробки,
                поддерживающей исключительно гибкие ассоциативные модели, права, обработчики.</Typography>Решени</li>
            </ul>
          </ul>
          <ul className="notion-list notion-list-disc">
            <li><Typography><a className="notion-link" href="http://deep.Space">Deep.Space</a> ⇒ SaaS сервис</Typography></li>
            <ul className="notion-list notion-list-disc">
              <li><Typography>й <b>выбор региона хранения и вычислений</b> именно для вашего проекта в единой Kubernetes-сети,
                обьединяющей ДЦ всего мира. Достаточно описать модели данных и привязать поведения. Мощности на выполнения сами
                выделятся и применятся. Ассоциативные связи сами распределятся между хранилищами разной степени доступности на
                основе и ваших настроек, и частоты использования конкретно этих ассоциаций в автоматическом режиме.</Typography>Автоматически</li>
              <li><Typography>ь <b>полностью забыть</b> о необходимости в штате backend, fullstack и devops-специалистов. Сервис
                полностью обеспечивает проекты бэкендом для хранения и выполнения, но, в отличии от AWS/Azure, еще и позволяет из
                готовых ассоциативных моделей сразу собирать свои бизнес-проекты.</Typography>Возможност</li>
              <li><Typography><b>No-code культура</b>. Используя ассоциативную среду для хранения данных, можно обеспечить все интерфейсы
                вашего проекта хранением, поиском и агрегацией данных. Проекты, созданные в SaaS-среде <a className="notion-link"
                  href="http://deep.Space">Deep.Space</a>, не нужно будет переписывать после теста гипотез для реального
                использования. Ставить эксперименты становится легче, чем кто-либо мог себе представить.</Typography></li>
            </ul>
          </ul>
          <Typography variant="h3">Поддержите ассоциативность</Typography>
          <Typography>Сейчас мы собираем аудиторию вокруг идеи и ищем инвестиции для продолжения разработки. Если вам
            нравится то что мы делаем, <a className="notion-link" href="https://discord.gg/vNJCTK4nZB">добавляйтесь к нам в
              Discord</a>, зарегистрируйтесь в список ожидания ниже, или поддержите нас на <a className="notion-link"
              href="https://www.patreon.com/deepfoundation?fan_landing=true">Patreon</a>.</Typography>
          <Typography>Если у вас желание участвовать в развитие проекта - смело пишите нам об этом в Discord или лично
            каждому из фаундеров. <b>Мы будем вам очень рады.</b></Typography>
          <Typography><a className="notion-link"
              href="https://docs.google.com/presentation/d/16f_kJRfL9qkiCS3wTz2-PQiI3UFE3WglqfbTh0x60qk/edit?usp=sharing">Deep.Foundation
              презентация для сообщества</a></Typography>
          <Typography><a className="notion-link"
              href="https://docs.google.com/presentation/d/1AcouBjH5MD5doUGW5kqD7eTVMyZlI-Ib/edit?usp=sharing&amp;ouid=108039719499772556966&amp;rtpof=true&amp;sd=true">Презентация
              для инвесторов</a></Typography>
          <div className="notion-blank">&nbsp;</div>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.waitlistgrid}>
        <Waitlist
          api_key="BBNAIR"
          waitlist_link="https://deep.foundation/pre-order"
          joinWaitlistHeading="Subscribe to Deep.Case EE and Deep.Space early access."
        />
      </Grid>
      <Grid item xs={12} style={{ height: '30vh' }} />
    </Screen>
  </>)
};
