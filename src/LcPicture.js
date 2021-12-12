import { makeStyles, mergeClasses } from '@mui/styles';
import lcAnkara from './lcAnkara.jpeg'

const useStyles = makeStyles({
    imgDiv: {
        width: '350px',
        margin: 'auto',
    },
    lcPicture: {
        width: '100%',
    }
  });

const LcPicture = ({lcPicture}) => {
    const classes = useStyles();
    return(
        <div className={classes.imgDiv}>
            <img src={lcPicture} alt="" srcset="" className={classes.lcPicture}/>
        </div>
    );
    
}

export default LcPicture;