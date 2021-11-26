import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com'
import { useRouter } from 'next/router';
import useStyles from '../utils/styles';
import Layout from '../components/Layout';
import { Button, List, ListItem, Typography } from '@material-ui/core';
import { useSnackbar } from 'notistack';

export default function Mailer() {
  const initialState = {
    err: '',
    success: ''
}
const classes = useStyles();
const [data, setData] = React.useState(initialState)
const { success} = data
const router = useRouter();
const { enqueueSnackbar, closeSnackbar } = useSnackbar();


  const sendEmail = (e) => {
    e.preventDefault();
    closeSnackbar();
    emailjs.sendForm('service_zm06g9f','template_lk616vr',e.target,'user_E9dO8mPutXvq8TEujiCvr'
    ).then(res=>{
      console.log(res);
      return  setData (enqueueSnackbar( "Thank you for contact us!! , we will reply very soon",{variant:success}))
    }).then(res=>{
      setTimeout(()=>{ router.push('/')},5000)
      console.log(res)
    }).catch(err=>console.log(err));

  };

const TextFieldStyle={width:350, heigth:350,color:'black'}
  return (
    <Layout>
    <div className={classes.center}>
    <Typography component="h1" variant="h4" align="center">
            Contact Us <i className="fas fa-mail-bulk"></i>
          </Typography>

   
            <form onSubmit={sendEmail}>
              <List>
                <ListItem>
                   
                    <TextField requiered type="text" name="email" placeholder="Enter email address" id="email"/>
                    </ListItem>
                    <ListItem>

                    <TextField requiered type="text" name="name" placeholder="Enter your name" id="name"/>
                    </ListItem>

                <ListItem>

                    <TextField  requiered type="text" name="subjet" placeholder="Enter subjet" id="subjet"/>
                 </ListItem>
                <ListItem>
                <TextField  requiered name="text-contact" style={TextFieldStyle}
                  placeholder="Enter you text here"
                  id="outlined-multiline-flexible"
                  Typography="Enter your text"
                  multiline
                  maxRows={4}
                 />

                </ListItem>
             
              </List>        
             
            
            <Button variant="contained" type="submit" fullWidth color="primary">
                Send mail
              </Button>
            </form>
        </div>
      </Layout>
    )
}

