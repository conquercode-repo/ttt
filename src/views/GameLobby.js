import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import QuestionCard from '../components/QuestionCard'
import Multiplayer from '../components/Multiplayer'
import Score from '../components/Score'

export default function BasicCard() {
    const filePaths = ['teacher', 'toucher', 'terrorist']
    const [question, setQuestion] = React.useState('');
    const [answer, setAnwser] = React.useState('');
    const [type, setType] = React.useState('');
    const [showAnswer, setShowAnswer] = useState(false);

    const [players, setPlayers] = useState([
        {
            name: 'Player One',
            id: 0,
            score: 0,
            racismLevel: 0
        }
    ]);

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    
    function generateQuestions(){
        const typeIndex = getRandomInt(0,3)
        const thisFilePath = `https://teachertoucherterrorist.com/images/` + filePaths[typeIndex]
        const imageArrPosition = getRandomInt(0,139);
        setQuestion(`${thisFilePath}/img${imageArrPosition}.jpg`)
        setAnwser(`${thisFilePath}/exp${imageArrPosition}.jpg`)
        setType(filePaths[typeIndex]);
        setShowAnswer(false);
    }

    React.useEffect(()=>{
        generateQuestions();
    }, [])

    const submitAnswers = () => {
        setShowAnswer(true)
    }

    const nextQuestion = () => {
        generateQuestions();
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
                <QuestionCard showAnswer={showAnswer} question={question} answer={answer} type={type} />
            </Grid>
            <Grid xs={3} item>
                <Score submitAnswers={submitAnswers} nextQuestion={nextQuestion} players={players} />
            </Grid>
        </Grid>
    );
}