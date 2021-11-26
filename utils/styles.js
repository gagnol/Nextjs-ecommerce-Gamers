import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  navbar: {
    fontFamily: 'Ubuntu',
    backgroundColor: '#111',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
      fontWeight: 'bold',
      cursor:'pointer',
    },
  },
  brand: {
    fontWeight: 'bold',
 
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    color:'#203040',
    marginTop: 10,
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
  form: {
    width: '100%',
    maxWidth: 800,
    margin: '0 auto',
  },
  center:{
    boxShadow:' 0 3px 15px rgba(0,0,0,.4)',
    width: '430px',
    height: '520px',
    margin: '50px auto',
    position: 'relative',
    padding:'15px'
   },
     
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
  },
  transparentBackgroud: {
    backgroundColor: 'transparent',
  },
  error: {
    color: '#f04040',
  },
  fullWidth: {
    width: '100%',
  },
  reviewForm: {
    maxWidth: 800,
    width: '100%',
  },
  reviewItem: {
    marginRight: '1rem',
    borderRight: '1px #808080 solid',
    paddingRight: '1rem',
  },
  toolbar: {
    justifyContent: 'space-between',
    textUnderlinePosition:'under',
  },
  menuButton: { padding: 0 },
  
  mt1: { marginTop: '1rem',
  backgroundImage:'url("images/fondo1.png")'
   },
   ListIcon:{
    position:'realtive',
    color:'black', 
    alignItems:'center',
     fontSize:'25px',
     cursor:'pointer',

   },
   featuredImage:{
    transform: 'translateX(50vh)',
    objectFit: 'contain',
    height:300,
    width:300,
   },
   gridCard:{
    border:'2px solid #282c34',
    width:300,
    height:600,
     },
   pagination:{ 
    width: '100%',
    display: 'flex',
    justifyContent:' center',
    marginTop:' 20px',
    marginBottom:'40px'},
  // search
  searchSection: {
    transform: 'translateX(50vh)',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 5,
  },
  searchInput: {
    paddingLeft: 5,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
 
  sort: {
    marginRight: 5,
  },

  fullContainer: { height: '100vh' },
  mapInputBox: {
    position: 'absolute',
    display: 'flex',
    left: 0,
    right: 0,
    margin: '10px auto',
    width: 300,
    height: 40,
    '& input': {
      width: 250,
    },
    searchSection: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    searchForm: {
      border: '1px solid #ffffff',
      backgroundColor: '#ffffff',
      borderRadius: 5,
    },
    searchInput: {
      paddingLeft: 5,
      color: '#000000',
      '& ::placeholder': {
        color: '#606060',
      },
    },
    iconButton: {
      backgroundColor: '#f8c040',
      padding: 5,
      borderRadius: '0 5px 5px 0',
      '& span': {
        color: 'black',
      },
      
    },
  },
}));
export default useStyles;
