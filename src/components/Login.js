import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 500 }}>
      <CardContent>
        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
          Teacher, Toucher, or Terrorist?
        </Typography>
        <CardMedia
            component="img"
            image="https://static-cdn.jtvnw.net/emoticons/v2/303512117/static/light/3.0"
            alt="green iguana"
            style={{objectFit: 'contain', height: '350px'}}
        />
        <Typography sx={{ fontSize: 15, marginTop: '5px' }} color="text.secondary" gutterBottom>
          Brought to You by Rokkema and ConquerCode.
        </Typography>
      </CardContent>
      <CardActions>
          <Link block href="/gamelobby" variant="contained" style={{textDecoration: 'none', color: 'white', width: '50%', marginRight: '25%', marginLeft: '25%', backgroundColor: '#7ED957'}}>Start Game</Link>
      </CardActions>
    </Card>
  );
}