import { makeStyles } from '@mui/styles';
import LcPicture from './LcPicture';
import LcTag from './LcTag';
import {useState} from 'react';

const useStyles = makeStyles({
    lcPage: {
      width: '500px',
      minHeight: '400px',
      margin: '15px auto',
      background: '#f5e6e0',
      borderRadius: '15px'
    },
    lcPageClicked: {
      width: '500px',
      minHeight: '400px',
      margin: '15px auto',
      background: '#b2968a',
      borderRadius: '15px'
    }
  });


const LcPage = ({lcInfo, selectedList, setSelected}) => {
    const classes = useStyles();

    const [design, setDesign] = useState(classes.lcPage);

    const handleClick = () => {
      console.log('Clicked');
      console.log(lcInfo);
      if(design === classes.lcPage){
        setDesign(classes.lcPageClicked);
      }
      else{
        setDesign(classes.lcPage);
      }

      if(selectedList.includes(lcInfo.name)){
        console.log('Includes');
        let temp = [...selectedList];
        let index = temp.findIndex(e => e === lcInfo.name);
        console.log(index);
        temp.splice(index, 1);
        setSelected(temp);
      }
      else{
        let temp = [...selectedList].concat([lcInfo.name]);
        setSelected(temp);
      }
      console.log(selectedList);
    };

    return(
        <div className={design} onClick={() => handleClick()}>
            <LcPicture lcPicture={lcInfo.picture}/>
            <LcTag name={lcInfo.name}/>
        </div>
    );
};

export default LcPage;