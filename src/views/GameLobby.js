import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import QuestionCard from '../components/QuestionCard'
import Multiplayer from '../components/Multiplayer'
import Score from '../components/Score'

export default function BasicCard() {
    const [showAnswer, setShowAnswer] = useState(false)
    const [players, setPlayers] = useState([
        {
            name: 'Player One',
            id: 0,
            score: 0,
            racismLevel: 0
        }
    ]);

    const submitAnswers = () => {
        setShowAnswer(true)
    }

    const addPlayer = (e) => {
        if(players.length < 2){
            setPlayers(
                [
                    ...players,
                    {
                        name: 'New Player',
                        id: 4,
                        score: 250,
                        racismLevel: 75
                    }
                ]
            )
        }
    }
    return (
        <Grid container spacing={2} style={{paddingLeft: '5%', paddingRight: '5%'}}>
            <Grid xs={3} item>
                <Multiplayer players={players} addPlayer={() => addPlayer()} />
            </Grid>
            <Grid xs={6} item>
                <QuestionCard showAnswer={showAnswer} />
            </Grid>
            <Grid xs={3} item>
                <Score submitAnswers={submitAnswers} players={players} />
            </Grid>
        </Grid>
    );
}