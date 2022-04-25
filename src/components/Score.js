import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function BasicCard(props) {
    let players = props.players
    return (
        <>
            {players.map((item) => {
                return ( 
                    <Card style={{marginBottom: '15px'}}>
                        <CardContent key={item.id}>
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
                                racism meter: {item.racismLevel}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <ButtonGroup size="small" aria-label="large button group">
                                <p style={{fontSize: 15, marginRight: '5px'}}>They Are:</p>
                                <Button >Teacher</Button>
                                <Button >Toucher</Button>
                                <Button >Terrorist</Button>
                            </ButtonGroup>
                        </CardActions>
                    </Card>
                )
        })}
        </>
    );
}