import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardMedia from '@mui/material/CardMedia';
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
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
          Teacher, Toucher, or Terrorist?
        </Typography>
        <CardMedia
            component="img"
            height="500"
            width="250"
            image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
        />
      </CardContent>
      <CardActions>
        <ButtonGroup size="large" aria-label="large button group" style={{minWidth: '70%', marginLeft: '15%', marginLeft: '15%'}}>
            <Button style={{width: '33.5%'}}>Teacher</Button>
            <Button style={{width: '33%'}}>Toucher</Button>
            <Button style={{width: '33.5%'}}>Terrorist</Button>
        </ButtonGroup>
      </CardActions>
    </Card>
  );
}