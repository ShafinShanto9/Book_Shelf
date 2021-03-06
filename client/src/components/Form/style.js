import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
     '&:hover': {
    backgroundColor: '#42ba96',
    boxShadow: 'none',
  },
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: '#FF5A5F',
    color:'white'
  },
 
  


  
}));