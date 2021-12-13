import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@mui/styles';



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
  },
  navBar: {
    background: 'darkred',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 70,
    width: '%100',
    padding: '0 30px',
    display: 'flex'
  },
  nameTag: {
      marginLeft: "auto",
      marginRight: "10%"
  },
  linkerDiv: {
      width: '30%',
      display: 'flex',        
  },
  link: {
      textDecoration: 'none',
      color: 'white',
      margin: '30px auto'
  },
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
  const name= 'Onur'
  return (
    <div>

    </div>
  );
}

export default App;
