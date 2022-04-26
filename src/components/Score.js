import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import LinearProgress from '@mui/material/LinearProgress';

export default function BasicCard(props) {
    const [anwser, setAnswer] = useState('none')    
    let players = props.players
    const submitAnswers = (e) => {
        e.preventDefault();
        props.submitAnswers(true)
    }
    const nextQuestion = (e) => {
        e.preventDefault();
        props.nextQuestion(true)
    }
    return (
        <>
            {players && players.map((item) => {
                return ( 
                    <Card style={{marginBottom: '15px'}} key={item.id}>
                        <CardContent>
                            <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                                {item.name}
                                <IconButton aria-label="delete">
                                    <EditIcon />
                                </IconButton>
                            </Typography>
                            <Typography sx={{ fontSize: 25 }} style={{textAlign: 'left'}} color="text.secondary" gutterBottom>
                                score: {item.score}
                            </Typography>
                            <Typography sx={{ fontSize: 25 }} style={{textAlign: 'left'}} color="text.secondary" gutterBottom>
                                racism meter:
                                <LinearProgress variant="determinate" value={item.racismLevel} />
                            </Typography>
                        </CardContent>
                        <CardActions style={{padding: 0}}>
                            <Button onClick={() => setAnswer('teacher')} variant={anwser == 'teacher' ? 'contained' : 'text'} style={{margin: 0, width: '100%'}} >Teacher</Button>
                        </CardActions>
                        <CardActions style={{padding: 0}}>
                            <Button onClick={() => setAnswer('toucher')} variant={anwser == 'toucher'? 'contained' : 'text'} style={{margin: 0, width: '100%'}} >Toucher</Button>
                        </CardActions>
                        <CardActions style={{padding: 0}}>
                        <Button onClick={() => setAnswer('terrorist')} variant={anwser == 'terrorist' ? 'contained' : 'text'} style={{margin: 0, width: '100%'}} >Terrorist</Button>
                        </CardActions>
                    </Card>
                )
            })}
            <Card>
                <CardActions>
                    <Button fullWidth onClick={(e) => submitAnswers(e)}>
                        Get Answer
                    </Button>
                </CardActions>
                <CardActions>
                    <Button fullWidth onClick={(e) => nextQuestion(e)}>
                        Next Question
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}