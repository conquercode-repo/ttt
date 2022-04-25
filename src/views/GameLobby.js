import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import QuestionCard from '../components/QuestionCard'

export default function BasicCard() {
  return (
    <Grid container style={{paddingLeft: '5%', paddingRight: '5%'}}>
        <Grid xs={3} item>
            Multiplayer.
            <Card>
                <CardContent>

                </CardContent>
                <CardActions>
                    <Button>
                        Create Lobby.
                    </Button>
                    <Button>
                        Watch Lobby in Progress.
                    </Button>
                </CardActions>
            </Card>
        </Grid>
        <Grid xs={6} item>
            <QuestionCard />
        </Grid>
        <Grid xs={3} item>
            Score
        </Grid>
    </Grid>
  );
}