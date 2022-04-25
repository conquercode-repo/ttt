import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
    let showAnswer = props.showAnswer || false
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    
    const filePaths = ['teacher', 'toucher', 'terrorist']
    const typeIndex = getRandomInt(0,3)
    const thisFilePath = `https://teachertoucherterrorist.com/images/` + filePaths[typeIndex]
    const imageArrPosition = getRandomInt(0,139);
    const thisImage = thisFilePath + `/img` + imageArrPosition + `.jpg`;
    const thisAnswer = thisFilePath + `/exp` + imageArrPosition + `.jpg`;
    console.log(thisImage, thisAnswer, thisFilePath)

    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                Teacher, Toucher, or Terrorist?
                </Typography>
                {
                    showAnswer ?   
                    <Card>
                        <CardContent>
                            {filePaths[typeIndex]}
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="100%"
                            src={thisAnswer}
                        />
                    </Card> : 
                    <Card>
                        <CardMedia
                            component="img"
                            height="100%"
                            src={thisImage}
                        />
                    </Card>
                }
            </CardContent>
        </Card>
    );
}