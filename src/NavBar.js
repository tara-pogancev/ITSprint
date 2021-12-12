import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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
    }
  });


const NavBar = ({name}) => {
    const classes = useStyles();

    const handleClick = (event) => {
        console.log(event.target.childNodes[0].data);
        alert(event.target.childNodes[0].data);
    };

    return(
        <div className={classes.navBar}>
            <h3 className={classes.nameTag} onClick={(e) => handleClick(e)} val={name}>
                {name}
            </h3>
        </div>
    );
};

export default NavBar;