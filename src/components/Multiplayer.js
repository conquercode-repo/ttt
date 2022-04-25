import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
    const addPlayer = (e) => {
        props.addPlayer(e)
    }
  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
          Multiplayer
        </Typography>
        <Typography sx={{ fontSize: 20, textAlign: 'left' }} color="text.secondary" gutterBottom>
          Room Number: 00001
        </Typography>
      </CardContent>
      <CardActions>
          {
              props.players.length < 2 ? <Button onClick={() => addPlayer()} variant="contained" style={{width: '100%'}}>Add Local Player</Button> : <Button disabled variant="contained" style={{width: '100%'}}>Add Local Player</Button>
          }
      </CardActions>
    {/* TODO: /// Add Online Multiplayer */}
      {/* <CardActions>
        <Button variant="contained" style={{width: '100%'}}>Add Online Player</Button>
      </CardActions> */}
    </Card>
  );
}