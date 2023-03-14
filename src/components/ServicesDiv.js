import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Container, Typography} from '@mui/material';
import { Grid } from '@material-ui/core';
import TypographyHeader from './TypographyHeader';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ElectricityIcon from "./icons/ElectricityIcon";
import DryWallIcon from "./icons/DryWallIcon";
import PaintingIcon from "./icons/PaintingIcon";
import PlumbingIcon from "./icons/PlumbingIcon";
import WindowsIcon from "./icons/WindowsIcon";
import FloorIcon from "./icons/FloorIcon";
import FenceIcon from "./icons/FenceIcon";
import DoorIcon from "./icons/DoorIcon";

const useStyles = makeStyles({
  div: {
    backgroundColor: '#E8BA1E',
    padding: 180,
    marginTop: -50,
    minHeight: 500,
  },
  header:{
    textAlign: 'center',
  },

  itemText: {
    fontSize: 24,
    fontWeight: 200,
    display: 'inline-block',
    marginLeft: 8
  }
  });
  

function ServicesDiv(props) {
  const classes = useStyles();

  const Item = styled(Container)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: '#191F1D',
    margin: 8,        
    fontWeight: 400,
    fontSize: 24,
  }));

  return (
    <div className={classes.div}>       
        <Container className={classes.header}>
            <HandymanOutlinedIcon style={{fontSize: 70, color: '#191F1D', display:'inline-block', verticalAlign: 'bottom'}}/>
            <TypographyHeader display={'inline-block'} text={'Services'}/>
        </Container>
        <Box sx={{ width: '100%', marginTop: 8 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                     <Item>
                        <ElectricityIcon/>
                        <Typography className={classes.itemText}>Electricity</Typography>                        
                     </Item>
                </Grid>
                <Grid item xs={3}>
                     <Item>
                      <PaintingIcon />
                     <Typography className={classes.itemText}>Painting</Typography>                        
                     </Item>
                </Grid>
                <Grid item xs={3}>
                     <Item>
                      <PlumbingIcon />
                      <Typography className={classes.itemText}>Plumbing</Typography>                        
                     </Item>
                </Grid>
                <Grid item xs={3}>
                     <Item>
                      <FenceIcon />
                       <Typography className={classes.itemText}>Vinyl Fence</Typography>                        
                     </Item>
                </Grid>
                <Grid item xs={3}>
                     <Item>
                      <WindowsIcon />
                      <Typography className={classes.itemText}>Windows</Typography>                        
                     </Item>
                </Grid>
                <Grid item xs={3}>
                    <Item>
                      <DoorIcon />
                      <Typography className={classes.itemText}>Doors</Typography>                    
                    </Item>
                </Grid>
                <Grid item xs={3}>
                   <Item>
                    <FloorIcon />
                     <Typography className={classes.itemText}>Flooring</Typography>                        
                   </Item>
                </Grid>
                <Grid item xs={3}>
                  <Item>
                    <DryWallIcon />
                    <Typography className={classes.itemText}>Drywall</Typography>                        
                  </Item>
                </Grid>
            </Grid>
        </Box>
   </div>
  );
}
export default ServicesDiv;