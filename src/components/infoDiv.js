import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container } from '@mui/material';
import { Box, Button, Grid } from '@material-ui/core';
import TypographyHeader from './TypographyHeader';
import InfoDivGuy from "../img/InfoGuy.png";
import {BrowserRouter as Router, Link } from 'react-router-dom';
import YelpIcon from './icons/YelpIcon';

const useStyles = makeStyles((theme) => ({
    div: {
      backgroundColor: '#E3D9CF',
      paddingTop: 80,
      paddingLeft: 80,
      paddingRight: 80,
      paddingBottom: '-10',
    },
    guyImage: {
      height: 540,
      margin: 2,
      backgroundImage: `url(${InfoDivGuy})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain'
    }
  }));
  


function InfoDiv(props) {
  const classes = useStyles();

  return (
    <Grid container className={classes.div}>
      <Grid item xs={6}>
        <Container>
            <TypographyHeader text={'Handyman'}/> <br></br>
            <TypographyHeader text={'Services'}/> <br></br>
            <TypographyHeader display={'inline'} text={'in '} />
            <TypographyHeader clr={'accent'} display={'inline'} text={' Los Angeles'} />
        </Container>    
        {/* вынести как отдельный компонент */}  
        <Router>
          <Link style={{ textDecoration: 'none' }} to="https://www.yelp.com/biz/2-guys-handyman-los-angeles-2" target="_blank">
            <Button style={{
                backgroundColor: '#191F1D',
                color: '#E3D9CF',
                borderRadius: 40,
                paddingTop:10,
                paddingBottom:10,
                paddingRight:20,
                paddingLeft:20,
                marginTop:40,
                marginLeft:24,
                fontWeight: 400,
                fontSize: 20
            }}>
              <YelpIcon />
              Book Service Now
            </Button>
          </Link>      
        </Router>   
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.guyImage} sx={{ display: 'inline' }}/>
      </Grid>
    </Grid>
  );
}
export default InfoDiv;