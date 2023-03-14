import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography} from '@mui/material';
import { Grid } from '@material-ui/core';
import TypographyHeader from './TypographyHeader';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import WorkersImage from "../img/WorkersImage.png";

const useStyles = makeStyles((theme) => ({
    div: {
      padding: 180,
      marginTop: -400,
      paddingBottom:100
    },
    workersImg: {
      backgroundImage: `url(${WorkersImage})`,
      minHeight: 360,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundPositionX:'center'
    }
  }));
  

function AboutUs(props) {
  const classes = useStyles();

  const Item = styled(Container)(({ theme }) => ({
    ...theme.typography.body2,
    color: '#191F1D',
    textAlign: 'center'
  }));

  return (
    <div className={classes.div}>
      <Container className={classes.workersImg} />       
      <div style={{marginTop:160}}>
          <TypographyHeader display={'inline-block'} text={'About Us'}/>
          <Box sx={{ width: '100%', marginTop: 16 }}>
              <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Item>
                      <TypographyHeader display={'block'} text={'5000+'} clr={'accent'}/>
                      <Typography style={{fontSize: 20, fontWeight: 400, display: 'block'}}>Total Recuests</Typography>                        
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <TypographyHeader display={'block'} text={'4900+'} clr={'accent'}/>
                      <Typography style={{fontSize: 20, fontWeight: 400, display: 'block'}}>Requestes completed</Typography>                        
                    </Item>
                  </Grid>
                  <Grid item xs={4}>
                    <Item>
                      <TypographyHeader display={'block'} text={'100%'} clr={'accent'}/>
                      <Typography style={{fontSize: 20, fontWeight: 400, display: 'block'}}>Satisfied Clients</Typography>                        
                    </Item>
                  </Grid>
              </Grid>
          </Box>
          <Typography style={{fontSize: 18, fontWeight: 400, display: 'block',marginTop: 80, marginRight: 20, marginLeft: 20,  textAlign: 'center'}}>
            Welcome to 2 Guys Handyman, your one-stop solution for all your property maintenance needs in Los Angeles. We are a team of experienced and skilled professionals who take pride in delivering top-notch handyman services to our valued clients. Our goal is to provide hassle-free and reliable handyman services to residents and businesses in Los Angeles, and to be known as the best handyman service in the city.
          </Typography>
          <Typography style={{fontSize: 18, fontWeight: 400, display: 'block',marginTop: 16, marginRight: 20, marginLeft: 20,  textAlign: 'center'}}>
          We offer a wide range of services, including home repairs, carpentry, plumbing, electrical work, painting, and more. Our team of experts has the knowledge and experience to handle any job, big or small. We understand that your time is valuable, and that's why we always arrive on time and complete the job efficiently and effectively. We also use high-quality materials to ensure the longevity and durability of our work.        </Typography>                        
      </div>
    </div>

  );
}
export default AboutUs;