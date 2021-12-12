import { makeStyles, mergeClasses } from '@mui/styles';
import lcAnkara from './lcAnkara.jpeg'

const useStyles = makeStyles({
    tagDiv: {
        width: '15%',
        margin: '5% auto',
        alignItems: 'center'
    },
    tag: {
        margin: 'auto',
        fontSize: 45,
        color: 'darkred'
    }
  });

const LcTag = () => {
    const classes = useStyles();
    return(
        <div className={classes.tagDiv}>
            <h3 className={classes.tag}>
                LC Ankara
            </h3>
        </div>
    );
    
}

export default LcTag;