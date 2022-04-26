import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
    let showAnswer = props.showAnswer || false
    let question = props.question || 'err'
    let answer = props.answer || 'err'
    let type = props.type || 'err'

    return (
        <Card>
            <CardContent>
                <Typography sx={{ fontSize: 40 }} color="text.secondary" gutterBottom>
                Teacher, Toucher, or Terrorist?
                </Typography>
                {
                    !showAnswer ?   
                    <Card>
                        <CardMedia
                            component="img"
                            height="100%"
                            src={question}
                        />
                    </Card> : 
                    <Card>
                        <CardContent>
                            {type}
                        </CardContent>
                        <CardMedia
                            component="img"
                            height="100%"
                            src={answer}
                        />
                    </Card>
                }
            </CardContent>
        </Card>
    );
}