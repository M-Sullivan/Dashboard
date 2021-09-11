import {
  AppBar,
  Button,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    offset: theme.mixins.toolbar,
  })
);

export default function App() {
  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            primary
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" style={{ background: '#FF847C', color: '#000' }}>
            orange
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" style={{ background: '#E84A5F', color: '#FFF' }}>
            red
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}
export function Footer() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Container maxWidth="md">
          <Toolbar variant="dense">
            <Typography variant="body1" color="inherit">
              © 2021
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
}
