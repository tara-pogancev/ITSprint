import { makeStyles } from '@mui/styles';
import LcPicture from './LcPicture';
import LcTag from './LcTag';

const useStyles = makeStyles({
    lcPage: {
      width: '80%',
      minHeight: '600px',
      margin: 'auto'
    }
  });


const LcPage = () => {
    const classes = useStyles();

    return(
        <div className={classes.lcPage}>
            <LcPicture/>
            <LcTag/>
        </div>
    );
};

export default LcPage;