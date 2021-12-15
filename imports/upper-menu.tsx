import { AppBar, Box, Grid, IconButton, makeStyles, Typography } from "@material-ui/core";
import { default as GitHub } from '@material-ui/icons/GitHub';
import React, { useEffect, useState } from "react";

const useStyles = makeStyles(theme => ({
  boxContainer: {
    display:  'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
}))

export const UpperMenu = (props) => {
  const classes = useStyles();

  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (window.scrollY == 140) !scrolled
    }, 500)
    return () => clearInterval(id);
  }, [scrolled])

  return (<AppBar color='default' position={!scrolled ? 'absolute' : 'fixed'}>
      <Grid container direction='row' justify='center' alignItems='center' item xs={12}>
        <Grid item xs={12} lg={8} xl={6}>
          <Box className={classes.boxContainer}>
            <Typography variant="h1">Deep.Foundation</Typography>
            <IconButton component={'a'} href="https://github.com/deepcase/deepcase"><GitHub style={{color: '#fff'}}/></IconButton>
          </Box>
        </Grid>
      </Grid>
    </AppBar>
  )
}