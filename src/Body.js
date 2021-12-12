import { makeStyles } from '@mui/styles';
import LcPage from './LcPage';
import lcList from './InfoPages/LcList';
import {useState, useEffect} from 'react';
import PopUp from './components/PopUp/PopUp';

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
    },
    lcList: {
        display: 'flex',
        flexWrap: 'wrap'
    }
  });

const Body = ({name}) => {
    const classes = useStyles();

    const [selectedList, setSelectedList] = useState([]);

    const [popUpHidden, setPopUp] = useState(false);

    const handlePopUp = () => {
        setPopUp(false);
        console.log('Handle popup');
    }

    useEffect(() => {
        console.log(selectedList);
        if(selectedList.length > 0){
            setPopUp(!popUpHidden);
        }
    }, [selectedList]);


    return(
        <div className={classes.body}>
            <h3 className={classes.nameTagBody}>
                {name}
            </h3>
            <div className={classes.lcList}>
                {lcList.map((lc) => {
                    return(
                        <LcPage key={lc.id} lcInfo={lc} selectedList={selectedList} setSelected={setSelectedList}/>
                    );
                })}
            </div>
            {
                popUpHidden && <PopUp handle={handlePopUp} lcNames={selectedList}/>
            }  
        </div>
    );
};

export default Body;