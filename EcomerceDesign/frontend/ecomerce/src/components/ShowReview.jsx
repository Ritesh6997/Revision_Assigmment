import { Typography } from '@mui/material';
import React from 'react'

export default function ShowReview({ele}) {
    
  return (
      <div>
        <Typography>
              {ele.userID.name}
          </Typography>
      <p>{ele.discription}</p>
    </div>
  );
}
