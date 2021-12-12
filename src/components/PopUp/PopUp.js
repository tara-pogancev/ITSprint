import { makeStyles } from '@mui/styles';
import PopUpBox from './PopUpBox';

const useStyles = makeStyles({
    popUp: {
        position: 'fixed',
        top: '0',
        right: '0',
        bottom: '0',
        left: '0',
        background: 'rgba(0, 0, 0, 0.5)',
        transition: 'opacity 500ms',
        zIndex:'3'
    }
  });

const PopUp = ({lcNames, handle}) => {
    const classes = useStyles();
    return(
        <div className={classes.popUp} onClick={handle}>
            <PopUpBox lcList={lcNames}/>
        </div>
    ); 
};

export default PopUp;