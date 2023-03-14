import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    div: {
      backgroundColor: '#191F1D',
      paddingLeft: 120,
      paddingTop: 48,
      paddingBottom: 32,
      color: '#E3D9CF'
      },
  }));
  

function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Typography>Los Angeles, CA</Typography>
      <Box style={{marginTop: 16}}>
        <Typography>Working Hours:</Typography>
        <Typography>Monday-Sunday: 9am-9pm</Typography>
      </Box>
      <Box style={{marginTop: 16}}>
        <Typography>Contact Us:</Typography>
        <Typography>Phone: +1 (747) 256-5610</Typography>
      </Box>
      <Typography style={{marginTop: 32}}>Copyright © 2023 2 Guys Handyman. All rights reserved.</Typography>
    </div>
  );
}
export default Footer;