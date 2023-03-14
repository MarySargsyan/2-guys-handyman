import React from 'react';
import { Typography } from '@mui/material';

function TypographyHeader({text, display, clr}) {

  return (
    <Typography  display={display} color={clr === 'accent' ?'#DDB11A':'#191F1D'} style={{            
        fontWeight: 700,
        fontSize: 70,
        lineHeight: 1,
        }}>
            {text}
        </Typography>
  );
}
export default TypographyHeader;