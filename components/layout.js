import React, { useContext,useState,useEffect} from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Link,
  Badge,
  IconButton,
  Button,
  Menu,
  MenuItem,
  InputBase,
  Box,
  Drawer,
  List,
  ListItem,
  Divider,
  ListItemText,

  
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import Cookies from 'js-cookie';
import Script from 'next/script'
import { getError } from '../utils/error';
import { useSnackbar } from 'notistack';
import axios from 'axios';


export default function Layout({ title, description, children }) {
  const classes = useStyles();
  const router = useRouter();
  const { state, dispatch } = useContext(Store);
  const { cart,userInfo } = state;
  const [anchorEl, setAnchorEl] = useState(null);
  const loginClickHandler = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const loginMenuCloseHandler = (e,redirect) => {
    if (redirect) {
      router.push(redirect);
    }
  };
  const logoutClickHandler = () => {
    setAnchorEl(null);
    dispatch({ type: 'USER_LOGOUT' });
    Cookies.remove('userInfo');
    Cookies.remove('cartItems');
    router.push('/');
  };
  
  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };

  const [sidbarVisible, setSidebarVisible] = useState(false);
  const sidebarOpenHandler = () => {
    setSidebarVisible(true);
  };
  const sidebarCloseHandler = () => {
    setSidebarVisible(false);
  };

  const [categories, setCategories] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`/api/products/categories`);
      setCategories(data);
    } catch (err) {
      enqueueSnackbar(getError(err), { variant: 'error' });
    }
  };
  useEffect(() => {
    fetchCategories();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
 
  return (
    <div>
        <Script src="https://kit.fontawesome.com/a076d05399.js"></Script>
      <Head>
      <title>{title ? `${title} - Next Ecommerce` : 'Planet•GamerX '}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
            <Box display="flex" alignItems="center">
            
              <NextLink href="/" passHref>
                <Link>
                <div className="logo"><a href="#">Planet <i className="fas fa-globe-americas"></i><span> Gamer</span><i className="fab fa-xing"></i></a></div>
                </Link>
              </NextLink>
            </Box>
              
        
          <div>
            <NextLink href="/cart" passHref>
              <Link to="/cart"> 
            <IconButton aria-label="Show cart items" color="inherit">
              <Badge badgeContent={cart.cartItems.length} color="secondary">
              <i className="fas fa-shopping-cart"></i>
              </Badge>
            </IconButton>
        </Link>
            </NextLink>
            {userInfo ? (
                <>
                  <Button
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={loginClickHandler}
                    className={classes.navbarButton}
                  >
                    {userInfo.name}
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={loginMenuCloseHandler}
                  >
                   <MenuItem
                      onClick={(e) => loginMenuCloseHandler(e, '/profile')}
                    >
                      Profile
                    </MenuItem>
                    <MenuItem
                      onClick={(e) =>
                        loginMenuCloseHandler(e, '/order-history')
                      }
                    >
                      Order History
                    </MenuItem>
                    <MenuItem onClick={logoutClickHandler}>Logout</MenuItem>
                  </Menu>
                </>
              ) : (
                <NextLink href="/login" passHref>
                  <Link>LOGIN</Link>
                </NextLink>
              )}
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      
    </div>
  );
}