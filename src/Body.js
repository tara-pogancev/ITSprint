import { makeStyles } from '@mui/styles';
import LcPage from './LcPage';

const useStyles = makeStyles({
    body: {
      width: '100%',
      minHeight: '800px'
    },
    nameTagBody: {
        marginRight: "auto",
        marginLeft: "10%",
        color: 'darkred',
        fontSize: 40
    }
  });

const Body = () => {
    const classes = useStyles();

    return(
        <div className={classes.body}>
            <h3 className={classes.nameTagBody}>
                Onur
            </h3>
            <LcPage/>
        </div>
    );
};

export default Body;