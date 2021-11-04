import { useNavigate } from "react-router";
import React, { useState, useEffect, useCallback } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import { TextField } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LockIcon from '@material-ui/icons/Lock';
import request from '../data/api';
import { useSelector } from 'react-redux';
import { NoticiasServices } from "../services/NoticiasServices";
import CardNew from "./CardNew";
import { Container } from "@material-ui/core";
import Grid from '@mui/material/Grid';


export default function Home() {

    const navigation = useNavigate();
    const [noticias, setNoticias] = useState([]);
    const [query, setQuery] = useState('');
  
    const user = useSelector(state => state.AuthReducer.user)

    const clickLogOut = () => {
        navigation('/login');
    }

    const handleChange = (e) => {
      setQuery(e.target.value);
    }

    const traerDatos = useCallback(
      async () => {
        //if (!user) return
        
        let res = await NoticiasServices(request).get(query, 0, 3);
        console.log('res.data', query,res.data)
        res = res.data.noticias.docs.sort();
        const datosNoticias = res.map((noticia) => {
          return {...noticia, value: noticia.id, label: noticia.nombre}
        })
        setNoticias(datosNoticias);
      },
      [query],
    )

    useEffect(() => {
      console.log('dfvd')
      traerDatos();
    }, [traerDatos, query]);


  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Paper square sx={{ pb: '50px' }}>
          
          <TextField style={{marginTop: '20px'}} onChange={handleChange} placeholder='Enter username' fullWidth required variant="standard" />
          
          <Grid container spacing={4}>
            {noticias.map((noticia) => (
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <CardNew noticia={noticia} />
              </Grid>
            ))}
            
          </Grid>

        </Paper>
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
          <Toolbar>
            <IconButton color="inherit" aria-label="open drawer">
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton onClick={clickLogOut} color="inherit">
              <LockIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </React.Fragment>
  );
}
