import { makeStyles, mergeClasses } from '@mui/styles';
import lcAnkara from './lcAnkara.jpeg'

const useStyles = makeStyles({
    tagDiv: {
        width: '35%',
        margin: '5% auto',
        alignItems: 'center'
    },
    tag: {
        margin: 'auto',
        fontSize: 40,
        color: 'darkred'
    }
  });

const LcTag = ({name}) => {
    const classes = useStyles();
    return(
        <div className={classes.tagDiv}>
            <h3 className={classes.tag} onClick={() => alert('LC Ankara')}>
                {name}
            </h3>
        </div>
    );
    
}

export default LcTag;