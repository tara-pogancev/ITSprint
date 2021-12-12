import { makeStyles, mergeClasses } from '@mui/styles';
import lcAnkara from './lcAnkara.jpeg'

const useStyles = makeStyles({
    imgDiv: {
        width: '30%',
        margin: 'auto',
    },
    lcPicture: {
        width: '100%',
    }
  });

const LcPicture = () => {
    const classes = useStyles();
    return(
        <div className={classes.imgDiv}>
            <img src={lcAnkara} alt="" srcset="" className={classes.lcPicture}  onMouseOver={() => alert('LC Ankara')}/>
        </div>
    );
    
}

export default LcPicture;