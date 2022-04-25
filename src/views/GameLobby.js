import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import QuestionCard from '../components/QuestionCard'
import Multiplayer from '../components/Multiplayer'
import Score from '../components/Score'

export default function BasicCard() {
    const [players, setPlayers] = useState([
        {
            name: 'Player One',
            id: 0,
            score: 0,
            racismLevel: 0
        }
    ]);
    // const [activePlayer, setActivePlayer] = useState(0)
    // useEffect(() => {
    //     let firstLoad = true
    //     if(firstLoad){
    //         setPlayers([{
    //             name: 'Player One',
    //             id: 1,
    //             score: 0,
    //             racismLevel: 0
    //         }])
    //         firstLoad = false;
    //     }
    //     console.log(players)
    // }, []);
    // let playerObj = {
    //     name: '',
    //     id: 0,
    //     score: 0,
    //     racismLevel: 0
    // }
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
                <QuestionCard />
            </Grid>
            <Grid xs={3} item>
                <Score players={players} />
            </Grid>
        </Grid>
    );
}