import logo from './logo.svg';
import './App.css';

import { makeStyles } from '@mui/styles';


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
  },
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
  },
  imgDiv: {
    width: '350px',
    margin: 'auto',
  },
  lcPicture: {
      width: '100%',
  },
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

function App() {
  return (
    <div>
    </div>
  );
}

export default App;
