import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { WODContext } from '../../utils/store'

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,
        maxWidth: 345,
        maxHeight: 200,
        marginTop: '5px',
        display: "flex",
        justifyContent: "center",
    },
    cardContentStyle: {
        textAlign: "center",
        fontFamily: "Bellota",
        padding: "0px"
    }

}));


export default function ImgMediaCard() {
    const {wod} = useContext(WODContext)
    const classes = useStyles();

    // const workoutComp = data.map(wo => (<p>{wo}</p>))

    // const workoutContext = React.createContext(workoutComp)
    return (
        <Card className={classes.root}>
            <CardActionArea>
                    <Typography style={{fontFamily: "Bellota", fontWeight: "bold", marginBottom: "0px"}} gutterBottom variant="h5" component="h2" align="center">
                        Workout Of The Day
                    </Typography>
                <CardContent className={classes.cardContentStyle}>
                    {wod.map((item,i) => <p style={{margin:"5px"}} key={i}>{item}</p>)}
                </CardContent>
            </CardActionArea>
        </Card>


    );
}
