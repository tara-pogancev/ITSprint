import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    popUpBox: {
        margin: '140px auto',
        padding: '20px',
        background: '#fff',
        borderRadius: '5px',
        width: '55%',
        height: '65%',
        position: 'relative',
        transition: 'all 5s ease-in-out',
        overflow:'scroll'
    },
    tagDiv: {
        width: '20%',
        margin: '5% auto',
        alignItems: 'center'
    },
    tag: {
        margin: 'auto',
        fontSize: 40,
        color: 'darkred'
    }
});
const PopUpBox = ({lcList}) => {
    const classes = useStyles();
    return(
        <div className={classes.popUpBox} onClick={e => e.stopPropagation()}>
            {lcList.map(lc => {
                return(<div key={lc} className={classes.tagDiv}>
                    <h3 className={classes.tag}>
                        {lc}
                    </h3>
                </div>);
            })}
        </div>
    );
};

export default PopUpBox;