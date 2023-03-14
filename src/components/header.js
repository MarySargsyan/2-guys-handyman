import React from 'react';
import Container from '@mui/material/Container';
import headerBackground from "../img/HeaderBackGround.svg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    header: {
      backgroundImage: `url(${headerBackground})`,
      minHeight: 290,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    }
  }));
  

function AppHeader(props) {
  const classes = useStyles();

  return (
    <div style={{backgroundColor: '#E3D9CF'}} className={classes.header}>
        <Container>
            <svg className='App-logo'></svg>
        </Container>
    </div>
  );
}
export default AppHeader;